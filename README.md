# React-Redux Tic-Tac-Toe Mini Project

React 자습서 (https://ko.reactjs.org/tutorial/tutorial.html) 에 내용 中

시간이 더 있거나 새로운 React 기술을 연습하고 싶은 경우 다음과 같이 난이도를 높일 수 있는 틱택토 게임 개선 아이디어를 구현해보세요.

- 이동 기록 목록에서 특정 형식(행, 열)으로 각 이동의 위치를 표시해주세요.
- 이동 목록에서 현재 선택된 아이템을 굵게 표시해주세요.
- 사각형들을 만들 때 하드코딩 대신에 두 개의 반복문을 사용하도록 Board를 다시 작성해주세요.
- 오름차순이나 내림차순으로 이동을 정렬하도록 토글 버튼을 추가해주세요.
- 승자가 정해지면 승부의 원인이 된 세 개의 사각형을 강조해주세요.
- 승자가 없는 경우 무승부라는 메시지를 표시해주세요.

위 내용을 보고, 제공된 Tic-Tac-Toe 코드를 React-Redux + Hooks 로 바꾸어 위 기능을 추가하면서 PR 연습 및 React-Redux 연습

## PR 기록

(실수로 Revert 했거나 logo 사진 제거 등 을 제외한 PR 기록)

## `#0 Redux Tic-Tac-Toe`

React 자습서의 Class형 코드를 Hooks 와 Redux를 가미한 코드로 수정하였습니다.

## `#1 Move Winner State to Redux`

승리 판정함수를 Redux 로 이동하여 Store 에서 winner state 를 관리

## `#2 Plus Position Showed`

이동 기록 목록에서 (행,열) 로 각 이동의 위치 표시

## `#4 Focus On Selecting`

선택한 사각형 강조

## `#8 Draw Judge`

무승부 판정 및 승리 판정시 승리한 이유인 사각형 강조

## `#9 Make Toggle Button`

토글 버튼을 만들어 이동순서를 오름차순/내림차순 정렬

## `#10 Remove Hard Coding`

Board 재 작성

# Default Readme by Create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
