{
  "src_folders": ["tests"],
  "output_folder": "tests/reports",
  "custom_commands_path": "",
  "custom_assertions_path": "",
  "page_objects_path": "pages",
  "globals_path": "globals",

  "selenium": {
    "start_process": true,
    "server_path": "./node_modules/selenium-standalone/.selenium/selenium-server/2.53.0-server.jar",
    "log_path": "./reports",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": "./node_modules/selenium-standalone/.selenium/chromedriver/2.21-x64-chromedriver"
    }
  },
  "test_settings": {
    "default": {
      "launch_url": "https://dashboard.syncano.io",
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true,
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
