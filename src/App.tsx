// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx"
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
// import Layout from "./components/Layout.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import PreviousValue from "./components/PreviousValue.tsx";
// import CounterWithRef from "./components/CounterWithRef.tsx";
// import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router";
import NameChanger from "./components/NameChanger.tsx";
import HomePage from "./pages/HomePage.tsx";
import Timer from "./components/Timer.tsx";
// import Layout from "./components/Layout.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import UserPage from "./pages/UserPage.tsx";

// import WindowSize from "./components/WindowSize.tsx";
// import NameChangerWithEffect from "./components/NameChangerWithEffect.tsx";

// import Timer from "./components/Timer.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import {useEffect} from "react";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";



function App() {

    // useEffect(() =>{
    //     const id = setInterval(() => console.log("tick"), 1000)
    //     return() => clearInterval(id)
    // },[]);

    // useEffect(() => {
    //     let counter: number = 1;
    //     const id: number = setInterval(() => {
    //         console.log(counter++);
    //     }, 1000)
    //     return () => clearInterval(id);
    // }, [])

   // useEffect(() => {
   //     history.pushState({page: 1}, "", "/page");
   //     history.replaceState({page: 1}, "", "/page1");
   //
   //     window.onpopstate = (e) => {
   //         console.log(e.state);
   //     }
   // })

    return (
        <>
            {/*<ViteIntro />*/}
            {/*<ClassComponent />*/}
            {/*<FunctionalComponent />*/}
            {/*<ArrowFunctionalComponent />*/}
            {/*<ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component With Props" />*/}
            {/*<ArrowFunctionalComponentWithProps title="2nd Title" />*/}
            {/*<ArrowFunctionalComponentWithPropsType*/}
            {/*  title="Is an Arrow Functional Component With 2 Props"*/}
            {/*  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam."*/}
            {/*/>*/}
            {/*<Card title="Card">*/}
            {/*  <ArrowFunctionalComponentWithPropsType*/}
            {/*    title="Is an Arrow Functional Component With 2 Props"*/}
            {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam."*/}
            {/*  />*/}
            {/*</Card>*/}
            {/*<Layout>*/}

                {/*<ArrowFunctionalComponentWithPropsType*/}
                {/*    title="Is an Arrow Functional Component With 2 Props"*/}
                {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam."*/}
                {/*/>*/}
                {/*<FunctionalComponentWithState />*/}
                {/*<ClassComponentWithState />*/}

                {/*<Counter />*/}

                {/*<NameChanger />*/}

                {/*<CounterWithMoreStates/>*/}

                {/*<CounterAdvanced />*/}

                {/*<CounterWithCustomHook />*/}

                {/*<NameChangerWithEffect />*/}

                {/*<Timer />*/}

                {/*<WindowSize />*/}

                {/*<FocusInput />*/}

                {/*<PreviousValue />*/}

                {/*<CounterWithRef />*/}

            {/*</Layout>*/}

            <BrowserRouter>
                <Routes>

                    <Route element={<RouterLayout/>}>

                     <Route index element={<HomePage />} />

                    {/*<Route path="examples/name-changer" element={<NameChanger />}/>*/}
                    {/*<Route path="examples/timer" element={<Timer />}/>*/}

                      <Route path="examples?">
                        <Route path="name-changer" element={<NameChanger/>}/>
                        <Route path="timer" element={<Timer/>}/>

                        {/*<Route path="*" element={<ExamplePage/>}/>*/}
                      </Route>
                    </Route>

                    {/*<Route path="users/:userId" element={<UserPage />} />*/}
                    {/*<Route path="users/:userId/accounts" element={<UserAccountPage />} />*/}

                    {/*<Route path="files/*" element={<FilePage />} />*/}

                    <Route path="users">
                        <Route path=":userId">
                            <Route index element={<UserPage />}/>
                            {/*<Route path="accounts" element={<UserAccountPage/>}/>*/}
                        </Route>
                    </Route>

                    {/*<Route path="*" element={<PageNotFound/>}/>*/}
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App