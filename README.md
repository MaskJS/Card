
  # 卡牌小程序

  This is a code bundle for 卡牌小程序. The original project is available at https://www.figma.com/design/mO0KcSaMWVDW4nloMp9obw/%E5%8D%A1%E7%89%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ### Using PM2

  This project includes PM2 configuration for production deployment.

  **Install PM2:**
  ```bash
  npm install -g pm2
  ```

  **Development mode:**
  ```bash
  npm run pm2:dev    # Start dev server with PM2
  ```

  **Production mode:**
  ```bash
  npm run pm2:build  # Build and start with PM2
  ```

  **Common PM2 commands:**
  ```bash
  npm run pm2:start   # Start from config file
  npm run pm2:stop    # Stop PM2 application
  npm run pm2:restart # Restart PM2 application
  npm run pm2:delete  # Delete PM2 application
  npm run pm2:logs    # View PM2 logs
  npm run pm2:monit   # Open PM2 monitoring dashboard
  ```

  **Manual PM2 commands:**
  ```bash
  pm2 start ecosystem.config.js      # Start application
  pm2 stop ecosystem.config.js        # Stop application
  pm2 restart ecosystem.config.js     # Restart application
  pm2 logs                            # View logs
  pm2 monit                           # Open monitoring
  pm2 status                          # Check status
  ```
  