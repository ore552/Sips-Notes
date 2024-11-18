import './App.css'

function App() {


  return (
    <>
      <header>
        <nav className='navbar'>
          <div className='logo'>
            <h1><a href="#">Sips & Notes</a></h1>
          </div>
          <ul className='links'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Our Sips</a></li>
              <li><a href="#">Our Notes</a></li>
              <li className='join-btn'><a href="#" >Support us</a></li>
              <li className='join-btn'><a href="#" >Join us</a></li>
              <li className='join-btn'><a href="#" >Sign in</a></li>
              <li className='join-btn'><a href="#" >Log in</a></li>
          </ul>
        </nav>
      </header>
        
      <section className='hero-section'>

        <div className='content'>
          <h1>Want to study and learn while getting your beverages, we got you covered.</h1>
          <form action="#" className='search-form'>
            <input type="text" placeholder='Your coffees and teas and fizzy drinks and study notes await...'/>
          </form>
          <div className='notes'>
            <h2>A Note from a teacher talking about the pros of Geology</h2>
            <p><strong>Geology is a broad discipline</strong>
            <br />
            Geology is a broad discipline that combines the basic sciences to study the Earth. It covers a wide range of topics, including the Earth's origin, composition, and structure, as well as the distribution of continents and oceans. 
            <br />
            <strong>Geology is relevant to many global challenges</strong>
            <br />
            Geology is essential to understanding and addressing many global challenges, such as climate change, natural hazards, and sustainability. 
            <br />
            <strong>Geology is important for building infrastructure</strong>
            <br />
            Earth sciences are directly related to many things we interact with, including the materials used to build infrastructure and transport systems. 
            <br />
            <strong>Geology can be exciting</strong>
            <br />
            Students are more likely to engage with the material if they are excited about it. Teachers can highlight the relevance of the material and encourage students to follow their dreams. 
            <br />
            <strong>Geology is often not given enough visibility in the curriculum</strong>
            <br />
            Geology is often integrated into other subjects, such as geography, chemistry, or physics. This can make it difficult for students to make informed decisions about their future. 
            </p>
          </div>

        </div>
      </section>
      <section className='hero-notes'>
      <div className='content'>
            <div className='notes'>
              <h1>Our favourites</h1>
              

                <ul className='links-btn'>
                  <h2>First Generation Drinks</h2>
                  <li className='btn-link'><a href="#">Cappuccino <strong>£1.20</strong></a></li>
                  <li className='btn-link'><a href="#">Black Tea <strong>£1.20</strong></a></li>
                  <li className='btn-link'><a href="#">Coke <strong>£1.20</strong></a></li>
                  <li className='btn-link'><a href="#">Milk <strong>£2.00</strong></a></li>
                  
                </ul>
                
                <ul className='links-btn'>
                  <h2>Second Generation Drinks</h2>
                  <li className='btn-link'><a href="#">Latte <strong>£1.30</strong></a></li>
                  <li className='btn-link'><a href="#">Green Tea <strong>£1.30</strong></a></li>
                  <li className='btn-link'><a href="#"> Light Tonic<strong>£1.30</strong></a></li>
                  <li className='btn-link'><a href="#">Fruit Nectar Tropical <strong>£2.99</strong></a></li>
                </ul>
                
                <ul className='links-btn'>
                  <h2>Third Generation Drinks</h2>
                  <li className='btn-link'><a href="#">Caffe Macchiato <strong>£1.40</strong></a></li>
                  <li className='btn-link'><a href="#">Oolong Tea <strong>£1.40</strong></a></li>
                  <li className='btn-link'><a href="#">Fanta <strong>£1.40</strong></a></li>
                  <li className='btn-link'><a href="#">Tropical Fruit Jam Milk <strong>£3.50</strong></a></li>
                </ul>
              
            </div>
      </div>
      </section>
    </>
  )
}

export default App

