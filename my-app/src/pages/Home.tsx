import ContextAProvider from "../contexts/contextComponent";
import UserComponent from "../component/UserComponent";

const Home = () => {
    return (
        <>
        <ContextAProvider>
            <UserComponent />
            <UserComponent />
        </ContextAProvider>

        <ContextAProvider>
            <UserComponent />
        </ContextAProvider>
        </>
    )
}

export default Home;