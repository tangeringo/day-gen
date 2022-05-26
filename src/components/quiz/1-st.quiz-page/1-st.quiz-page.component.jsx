import { Page_1_container, Logic_Link, Creativity_Link, Both_Link } from './1-st.quiz-page.styles';

const First_Quiz_Page = () => {
    return (
        <Page_1_container>
            <h3> What do you think you are good in? </h3>
            <Logic_Link to="logic"> Logic </Logic_Link>
            <Creativity_Link to="creativity"> Creativity </Creativity_Link>
            <Both_Link to="logic_and_creativity"> Both </Both_Link>
        </Page_1_container>
    )
}

export default First_Quiz_Page;