import '../App.css'
import { Carousel } from "react-bootstrap"
import Picture from '../images/The-Good-Avocado.png'
import Picture1 from '../images/Family-Friends-Recipe-Collection.png'
import Picture2 from '../images/Pie-api.png'
import Picture3 from '../images/Find-the-Puppy.png'
import Picture4 from '../images/stranger-things.png'



const Projects = () => {
    return (
        <>
            <section class='projects'>
            <Carousel className='carousel' fade>
                {/* <Carousel.Container> */}
                <Carousel.Item>
                        <img id='avo-image'
                        class="d-block w-100 carousel-img"
                        src={Picture}
                        alt='the-good-avocado'
                        />
                        <h3>The Good Avocado!</h3>
                        <p className ='projects-descriptions'>
                        This group project is a Full Stack MERN application. This application allows users to view and index of restaurants as well as the ability to view more detailed about the restaurants by clicking on the restaurant card. Once on the show page users are greeted with a variety of details about the restaurant and when available a link to the restaurant’s personal website. Users can also leave reviews and upload images with the review. Users also can view all of the restaurants they have reviewed via a link on the nav bar. Users can also create restaurants and indicate that they are the owners of the restaurant. The application also allows users to utilize a search bar that will search a restaurants name, cuisine type or location. 
                        </p>
                    {/* <Carousel.Caption className='carousel-text'>
                        <h3>The Good Avocado!</h3>
                        <p>
                        Like a good avocado, a good restaurant can be hard to find.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item> 
                {/* </Carousel.Container> */}
                <Carousel.Item>
                    <img id='recipe-image'
                    className="d-block w-100 carousel-img"
                    src={Picture1}
                    alt='recipe-collection'
                    />
                    <h3>Family and Friends Recipe Collection</h3>
                    <p className ='projects-descriptions'>This Full Stack project was a personal project that reflects my design preferences. I wanted this application to feel like opening your grandmother’s recipe box. This project utilizes MongoDB, Express, LiquidJS, HTML, CSS, and JavaScript. User can securely create an account and create and view recipes, as well as leave notes about individual recipes. The user can also navigate to all the recipes they have created. I am actively working on a version 2 that will implement more options for users. </p>
                </Carousel.Item>
                <Carousel.Item>
                    <img id='pie-image'
                    className="d-block w-100 carousel-img"
                    src={Picture2}
                    alt='pie'
                    />
                     <h3>Pie API</h3>
                    <p className ='projects-descriptions'>This single resource API utilizes MongoDB, Express and LiquidJS, HTML, CSS, and JavaScript. It has full CRUD abilities and an easy-to-follow user experience. It allows users to sign up securely and view and create pies. It utilizes models and subdocuments. This was a steppingstone project that would enable me to make more dynamic projects in the future.</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img id='find-the-puppy-image'
                    className="d-block w-100 carousel-img"
                    src={Picture3}
                    alt="puppy"
                    />
                    <h3>Find the Puppy!</h3>
                    <p className ='projects-descriptions'>This front-end project was built using HTML, CSS, and vanilla JavaScript. It was my first attempt at building something after the first two weeks of my program. Since I come from an education background, I wanted to make a simple matching game. The code randomizes the order of the cards and allows the user to play against a computer. The code is simple, clean, and dry. </p>               
                </Carousel.Item>
                <Carousel.Item>
                    <img id='stranger-image'
                    className="d-block w-100 carousel-img"
                    src={Picture4}
                    alt="stranger-things"
                    />
                    <h3> Stranger Things Fan Page</h3>
                    <p className ='projects-descriptions'>This HTML, CSS, and JavaScript fan page utilizes basic componets of each language. It has DOM manipulation as well and clean code.</p>
                </Carousel.Item>
            </Carousel>
            </section>
        </>
    )
}



export default Projects