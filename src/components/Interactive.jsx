import { ReactTerminal, TerminalContextProvider } from "react-terminal";
import axios from "axios";
import "./Interactive.css";
import React from "react";

const Interactive = () => {
  const terminalCommands = React.useMemo(() => {
    return {
      "get-location": {
        help: "Gets your current location",
        action: () =>
          new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
              async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                  const response = await axios.get(
                    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=2b601a58d8544c70b0569ba477437e9c`
                  );

                  const city = response.data.results[0].components.city;
                  resolve(
                    `Your current position is ${city} & Latitude is ${latitude} & Longitude is ${longitude}`
                  );
                } catch (error) {
                  reject(`Error: ${error.message}`);
                }
              },
              (error) => {
                reject(`Geolocation Error: ${error.message}`);
              }
            );
          }),
      },
      ls: {
        help: "List out all the available commands",
        action: () => {
          return Object.keys(terminalCommands).join(", ");
        },
      },

      "get-time": {
        help: "Get the current time",
        action: () => {
          return new Date().toLocaleTimeString();
        },
      },
      "get-date": {
        help: "Get the current date",
        action: () => {
          return new Date().toLocaleDateString();
        },
      },
      "get-day": {
        help: "Get the current day",
        action: () => {
          return new Date().toLocaleDateString("en-US", { weekday: "long" });
        },
      },
      "open-linkedin": {
        help: "Open my LinkedIn profile",
        action: () => {
          window.open("https://www.linkedin.com/in/tejaspachgade/");
        },
      },
      "open-github": {
        help: "Open my GitHub profile",
        action: () => {
          window.open("https://github.com/tejaspachgade2315");
        },
      },
      "open-twitter": {
        help: "Open my Twitter profile",
        action: () => {
          window.open("https://twitter.com/tejaspachgade_");
        },
      },
      "open-instagram": {
        help: "Open my Instagram profile",
        action: () => {
          window.open("https://www.instagram.com/tejaspachgade_/");
        },
      },
      "open-spotify": {
        help: "Open Spotify to listen music",
        action: () => {
          window.open("https://www.spotify.com/");
        },
      },
      "open-yt": {
        help: "Open Youtube to play some videos",
        action: () => {
          window.open("https://www.youtube.com/");
        },
      },
      "open-gmail": {
        help: "Open Gmail to check your mails",
        action: () => {
          window.open("https://mail.google.com/");
        },
      },
    };
  }, []);

  return (
    <div className="flex justify-center bubbles">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="border-4 bored-red-900 bg-black tejas overflow-y-auto w-[1000px] h-[500px] md:ml-20">
        <h1 className="text-center mt-2 text-green sticky top-2 headings h-10 p-2 text-3xl fond-bold text-[#001b5e] headings font-serif">
          --Interactive Terminal--
        </h1>
        <div>
          <TerminalContextProvider>
            <ReactTerminal
              prompt={"$ tejaspachgade >> "}
              welcomeMessage={
                <div>
                  <p>
                    Welcome to my Portfolio Website! Get started by typing
                    `help` command below
                  </p>
                </div>
              }
              themes={{
                darkDefault: {
                  themeBGColor: "",
                  themeToolbarColor: "",
                  themeColor: "#38CC77",
                  themePromptColor: "red",
                },
              }}
              theme="darkDefault"
              commands={{
                ...Object.keys(terminalCommands).reduce(
                  (b, key) => ({ ...b, [key]: terminalCommands[key].action }),
                  {}
                ),
                help: (
                  <div style={{ marginTop: "5px" }}>
                    <p>Available Commands:</p>
                    {Object.keys(terminalCommands).map((key) => (
                      <p key={key}>
                        <span style={{ color: "#38CC77" }}>{key}:</span>{" "}
                        {terminalCommands[key].help}
                      </p>
                    ))}
                    <p>
                      <span style={{ color: "#38CC77" }}>clear:</span> clears
                      out everything on screen!
                    </p>
                  </div>
                ),
              }}
            />
          </TerminalContextProvider>
        </div>
      </div>
    </div>
  );
};

export default Interactive;
