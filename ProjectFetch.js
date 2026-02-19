export const PROJECTFETCH = (DIRECTLINK, DATABASE) => {
  const FINDER = (DATA, ELEMENT, ELEMENT1, ACTION) => {
    const user = DATA.find((item) => item[ELEMENT] === ELEMENT1);
    return ACTION(user ? user : false);
  };

  fetch(DATABASE, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      sheetName: "Manager",
      spreadsheetUrl: DIRECTLINK,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      FINDER(data, "ID", localStorage.getItem("Config"), (User) => {
        if (User.ID === localStorage.getItem("Config") && User.Approved) {
          // Shared values
          localStorage.setItem("Shared", User.Shared);
          localStorage.setItem("SharedOne", User.SharedOne);
          localStorage.setItem("SharedTwo", User.SharedTwo);
          localStorage.setItem("SharedThree", User.SharedThree);
          localStorage.setItem("SharedFour", User.SharedFour);

          const env = localStorage.getItem("Env");

          if (env === "Web") {
            const prevValues = {
              Web: localStorage.getItem("Web"),
              WebOne: localStorage.getItem("WebOne"),
              WebTwo: localStorage.getItem("WebTwo"),
              WebThree: localStorage.getItem("WebThree"),
              WebFour: localStorage.getItem("WebFour"),
            };

            const newValues = {
              Web: User.Web,
              WebOne: User.WebOne,
              WebTwo: User.WebTwo,
              WebThree: User.WebThree,
              WebFour: User.WebFour,
            };

            Object.entries(newValues).forEach(([key, value]) =>
              localStorage.setItem(key, value)
            );

            localStorage.setItem("Packaged", new Date());

            const changed = Object.keys(newValues).some(
              (key) => newValues[key] !== prevValues[key]
            );

            if (changed) {
              location.reload();
            }
          } else if (env === "Android") {
            const prevValues = {
              Android: localStorage.getItem("Android"),
              AndroidOne: localStorage.getItem("AndroidOne"),
              AndroidTwo: localStorage.getItem("AndroidTwo"),
              AndroidThree: localStorage.getItem("AndroidThree"),
              AndroidFour: localStorage.getItem("AndroidFour"),
            };

            const newValues = {
              Android: User.Android,
              AndroidOne: User.AndroidOne,
              AndroidTwo: User.AndroidTwo,
              AndroidThree: User.AndroidThree,
              AndroidFour: User.AndroidFour,
            };

            Object.entries(newValues).forEach(([key, value]) =>
              localStorage.setItem(key, value)
            );

            localStorage.setItem("Packaged", new Date());

            const changed = Object.keys(newValues).some(
              (key) => newValues[key] !== prevValues[key]
            );

            if (changed) {
              location.reload();
            }
          } else {
            // Desktop
            const prevValues = {
              Desktop: localStorage.getItem("Desktop"),
              DesktopOne: localStorage.getItem("DesktopOne"),
              DesktopTwo: localStorage.getItem("DesktopTwo"),
              DesktopThree: localStorage.getItem("DesktopThree"),
              DesktopFour: localStorage.getItem("DesktopFour"),
            };

            const newValues = {
              Desktop: User.Desktop,
              DesktopOne: User.DesktopOne,
              DesktopTwo: User.DesktopTwo,
              DesktopThree: User.DesktopThree,
              DesktopFour: User.DesktopFour,
            };

            Object.entries(newValues).forEach(([key, value]) =>
              localStorage.setItem(key, value)
            );

            localStorage.setItem("Packaged", new Date());

            const changed = Object.keys(newValues).some(
              (key) => newValues[key] !== prevValues[key]
            );

            if (changed) {
              location.reload();
            }
          }
        } else {
          console.log("Fail");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
