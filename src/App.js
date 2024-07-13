import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home';
import Computers from './pages/Computers';
import Software from './pages/Software';
import Websites from './pages/Websites';
import PortfolioWebsites from './pages/PortfolioWebsites';
import MobileApps from './pages/MobileApps';
import WritingAccounts from './pages/WritingAccounts';
import OnlineCourses from './pages/OnlineCourses';
import Products from './components/product/Products';
import Contacts from './pages/Contacts';
const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/computers" element={<Computers />} />
            <Route path="/software" element={<Software />} />
            <Route path="/websites" element={<Websites />} />
            <Route path="/portfolio-websites" element={<PortfolioWebsites />} />
            <Route path="/mobile-apps" element={<MobileApps />} />
            <Route path="/writing-accounts" element={<WritingAccounts />} />
            <Route path="/online-courses" element={<OnlineCourses />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; 2024 Addis AI and Software Solutions. All rights reserved.</p>
        </footer>
        <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/665db4669a809f19fb3873ea/1hvf0hcl1';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
      </div>
    </Router>
  );
};

export default App;