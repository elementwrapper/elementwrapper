# elementwrapper
A lightweight Electron wrapper with tray icon for [app.element.io](https://app.element.io/) &mdash; compatible with old `flatpak` versions.

To run under Linux,
   ```bash
   sudo apt install git curl
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
   [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
   # install Node
   nvm use --lts
   # EW was tested at: node v18.17.1 (npm v9.6.7)
   npm i yarn -g
   git clone https://github.com/elementwrapper/elementwrapper.git
   cd elementwrapper
   dbus-launch yarn start
   ```
