@ECHO OFF

SETLOCAL

SET "CUR_DIR=%~dp0"

SET NODE_EXE="%NODE_HOME%\node.exe"
IF NOT EXIST %NODE_EXE% (
  SET NODE_EXE=node
)

SET "REPO_CLI_JS=%CUR_DIR%repo.js"

%NODE_EXE% "%REPO_CLI_JS%" -v  >nul 2>nul

IF %errorlevel% NEQ 0 (
  echo ERROR: Execute the setup script to initialize it first.
  exit /b 1
)

%NODE_EXE% "%REPO_CLI_JS%" %*





