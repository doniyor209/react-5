import './App.css'

function App() {
  return (
    <div>


      <header class="container">
        <img src="./Logo.png" alt="" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
            <button class="btn">Register Now <i class="fa-solid fa-right-long"></i></button>
          </ul>
        </nav>
        <button class="menu-btn"><i class="fa-solid fa-bars"></i></button>
      </header>
      <section className='texts container'>
        <div className="text">
          <h1>Lessons and insights <br /> <span className='yashil'>from 8 years</span></h1>
          <p>Where to grow your business as a photographer: site or social media?</p>
          <button className='btn'>Register</button>
        </div>
        <img src="./Img.png" alt="ds" />
      </section>
      <div className="our">
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
        <img className='ims' src="./Icons.png" alt="" />
      </div>
      <h1 className='hh'>Manage your entire community <br /> in a single system</h1>
      <section className='cards container'>

        <div className="card">
          <img src="./Cons.png" alt="ew" />
          <h2>Membership <br /> Organisations</h2>
          <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
        </div>
        <div className="card">
          <img src="./Cons.png" alt="ew" />
          <h2>Membership <br /> Organisations</h2>
          <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
        </div>
        <div className="card">
          <img src="./Cons.png" alt="ew" />
          <h2>Membership <br /> Organisations</h2>
          <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
        </div>

      </section>
      <section className='texts container'>
        <img src="./Fram.png" alt="" />
        <div className="text">
          <h1>The unseen of spending three <br /> years at Pixelgrade</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className='btn'>Learn More</button>
        </div>
      </section>

      <footer className='footer'>
        <div className="container footer-content">
          <div className="footer-col about-foodi">
            <img src="./Group 20.png" alt="" />
            <p>Where each plate weaves a story of culinary artistry and gastronomic delights.</p>
            <div className="social-icons">

            </div>
          </div>
          <div className="footer-col company">
            <h3>Company</h3>
            <nav>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </nav>
          </div>
          <div className="footer-col contact">
            <h3>Contacts</h3>
            <nav>
              <ul>
                <li><a href="#">Help & Support</a></li>
                <li><a href="#">Partner with us</a></li>
                <li><a href="#">Ride with us</a></li>
              </ul>
            </nav>
          </div>
          <div className="footer-col legal">
            <h3>Legal</h3>
          </div>
        </div>


      </footer>

    </div>
  )
}

export default App
