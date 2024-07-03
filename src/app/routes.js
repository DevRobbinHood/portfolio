import { Route, Routes } from 'react-router-dom';

import withRouter from '../hooks/withRouter';
import { Home } from '../pages/home';
import { Portfolio } from '../pages/portfolio';
import { ContactUs } from '../pages/contact';
import { Diensten } from '../pages/diensten';
import { About } from '../pages/about';
import { Socialicons } from '../components/socialicons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AnimatedRoutes = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition
            key={location.key}
            timeout={{
                enter: 200,
                exit: 200,
            }}
            classNames='page'
            unmountOnExit
        >
            <Routes location={location}>
                <Route exact path='/' element={<Home />} />

                <Route path='/about' element={<About />} />

                <Route path='/portfolio' element={<Portfolio />} />

                <Route path='/contact' element={<ContactUs />} />

                <Route path='/diensten' element={<Diensten />} />

                <Route path='*' element={<Home />} />
            </Routes>
        </CSSTransition>
    </TransitionGroup>
));

const AppRoutes = () => {
    return (
        <div className='s_c'>
            <AnimatedRoutes />
            <Socialicons />
        </div>
    );
};

export default AppRoutes;
