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
              <li><a href="#">About our Sips</a></li>
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
              <h1 className='large'>Our Sips</h1>
             

                <ul className='links-btn'>
                  <h2>First Generation Drinks</h2>
                  <li className='btn-link'><a href="#">Cappuccino <strong>£1.20</strong></a></li>
                  <li className='btn-link'><a href="#">Black Tea <strong>£1.20</strong></a></li>
                  <li className='btn-link'><a href="#">Coke <strong>£1.20</strong></a></li>
                  <li className='btn-link'><a href="#">Milk <strong>£2.00</strong></a></li>
                  
                </ul>
                
                <ul className='links-btn'>
                  <h2>Second Generation Drinks</h2>
                  <li className='btn-link'><a href="#">Latte <strong>£2.30</strong></a></li>
                  <li className='btn-link'><a href="#">Green Tea <strong>£2.30</strong></a></li>
                  <li className='btn-link'><a href="#"> Light Tonic<strong>£2.30</strong></a></li>
                  <li className='btn-link'><a href="#">Fruit Nectar Tropical <strong>£4.99</strong></a></li>
                </ul>
                
                <ul className='links-btn'>
                  <h2>Third Generation Drinks</h2>
                  <li className='btn-link'><a href="#">Caffe Macchiato <strong>£3.40</strong></a></li>
                  <li className='btn-link'><a href="#">Oolong Tea <strong>£3.40</strong></a></li>
                  <li className='btn-link'><a href="#">Fanta <strong>£3.40</strong></a></li>
                  <li className='btn-link'><a href="#">Tropical Fruit Jam Milk <strong>£5.50</strong></a></li>
                </ul>

                <ul className='specials links-btn'>
                    <h1>Specials!!!</h1>
                    <li className='btn-link'>Pina Colada (mocktail)</li>
                    <li className='btn-link'>Magarita (mocktail)</li>
                    <li className='btn-link'>Rainbow shaved ice</li>
                    <li className='btn-link'>Apple jelly</li>
                </ul>
            </div>
      </div>
    </section>
    <section className='hero-sips'>
      <h1 className='large'>Our Notes</h1>
      
      <div className='rightcolumn'>
        <ul>
        <h5>: Fun Random facts for you to know!</h5>
          <li> 
            Scotland's national animal is a unicorn
            The unicorn is the national animal of Scotland because in Celtic mythology, it represents purity, innocence, dominance, and chivalry.
          </li>
          <li>
            Sloths are blind in bright daylight:
            Sloths have a condition called rod monochromacy, which means they lack cone cells in their eyes. This makes them color-blind, and they can only see poorly in dim light.
          </li>
          <li>
            Snails have teeth:
            Snails have up to 12,000 teeth in a structure called a radula in their mouths. They use the radula to break down and pry off pieces of what they're eating.
          </li>
          <li>
            Ketchup was once sold as medicine:
            In the 1830s, an Ohio physician named John Cook sold ketchup as a remedy for indigestion. It wasn't widely used as a condiment until the late 1800s.
          </li>
          <li>
            Venus spins backwards:
            Venus spins in the opposite direction of Earth and most other planets. It takes Venus about 243 Earth days to spin once, and 225 Earth days to orbit the sun.
          </li>
          <li>
            Avocados are not vegetables:
            Avocados are fruits because they are single-seeded berries.
          </li>
        </ul>
        <ul>
          <li>
            A chef's hat has 100 folds:
            The 100 folds in a chef's hat, also known as a toque, represent 100 ways to cook an egg.
          </li>
          <li>
            Cats can't taste sweet thing:
            Cats are unable to taste sweet things because of a mutation in one of their taste receptors
          </li>
          <li>
            Bats give birth upside down:
            Female bats give birth while hanging upside down and use their wings or tail membrane to create a safety net to prevent the baby from falling.
          </li>
          <li>
            Australia is wider than the moon:
            Australia is almost 4,000 km in diameter from east to west, while the moon is 3,400 km in diameter.
          </li>
          <li>
            Bananas are berries:
            Bananas are scientifically classified as berries, which are a subgroup of fruits. Berries are the sweet, fleshy, seed-bearing part of a flowering plant.
          </li>
          <li>
            No number before 1,000 contains the letter A:
            If you were to spell out every number from 1-999, not one contains the letter 'A'. 'A' is the second most commonly-used letter, yet one thousand (1,000) is the first number spelt out that has the first A in it. 
          </li>
        </ul>
      </div>

    </section>
    <section className='hero-join'>
      
      <div className='wrapper'>
      <h1>Support our Sips and Join our Notes</h1>
        <form>
          {/* <h2>Login</h2> */}
          <div className="input-field">
            <input type="text" required/>
            <label>Enter Your email.</label>
          </div>
          <div className="input-field">
            <input type="password" required/>
            <label>Enter your password.</label>
          </div>
          <div className='input-field'>
            <input type="text" required/>
            <label>Enter your phone number</label>
          </div>
          <div className='input-field'>
            {/* <input type="checkbox" /> */}
            <input  type="text" required/>
            <label>Enter your money</label>
          </div>
          <div className="forget">
            <label for="remember">
              <input type="checkbox" id="remember"/>
              <p>Remember me</p>
            </label>
            <a href="#">Forget Password?</a>
          </div>
          <button type="submit">Join and Support</button>
            </form>
      </div>
    </section>
    <section className='hero-about'>
      <div className='story right-column'>
        <h1>Our Story</h1>
        <p>Toby Macaroo was born in 2000, and he is one of the youngest billionaires to ever walk the planet!. Toby was a kind boy at a young age, he was so keen on studying that he spent many days in his room revising notes for certain tests or subjects that even the teachers hadn't had a look at yet! By 13, he started drinking decaf coffee when studying so he could stay awake for longer to etch all the information he was studying about in his brain. At one point in his life (2015) where there were studying for the GCSEs, he wrote 10 book-sized notes of all the courses he was doing for the GCSEs. In 2018, he had finished secondary school and the first thing in his mind was not university, but coffee! Toby finally realised the need for coffee(took him long enough!) and notes and tips and information for tests and sessions and lectures. So he went to Harvard Universty and later MIT to earn numerous degrees including: <li>Math</li>
        <li>English</li>
        <li>Science</li>
        <li>Logic</li>
        <li>Physics</li>
        <li>Home Economics</li>
        <li>Ethics</li>
        <li>Handwriting</li>
        </p>
      </div>
    </section>
    </>
  )
}

export default App

