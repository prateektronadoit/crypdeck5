import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';
import NetworkDiagram from './components/NetworkDiagram';
import Products from './components/Products';
import About from './components/About';

// Network diagram doesn't require product items data

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full" 
           style={{ 
             background: 'linear-gradient(135deg, #0E0A1F 0%, #16102E 100%)',
           }}>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <Header />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Network Diagram Component */}
        <NetworkDiagram />
        
        {/* Products Component */}
        <Products />
        
        {/* About Component */}
        <About />
        
        {/* Footer Component */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
