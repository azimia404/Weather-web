import image from "./resources/Group 91.png";
import './App.css';
import navigation from "./resources/Navigation.svg";
import status from "./resources/Files.svg";
import files from "./resources/Status.svg";
import iphone from "./resources/Group 93.png";
import user from "./resources/user-1.png";

function Landing(){
    return(
        <>
            <header className="px-3 w-full flex items-center">
                <div className="w-6/12 px-[10%] py-[10%]">
                    <div className="flex flex-col w-[28rem] gap-1">
                        <h2 className="text-[5rem] leading-none text-white font-semibold">Your Live Forecaster</h2>
                        <span
                            className="text-xl text-white">Together We Forecast: Building Dreams, One Day at a Time!</span>
                        <span className="text-base text-black font-semibold">1million People like you have purchased this product!</span>
                        <div className="flex gap-4">
                            <button className="Button-black">Try now</button>
                            <button className="Button-yellow">Free till 15JUN2023</button>
                        </div>
                    </div>
                </div>
                <img className="w-6/12 max-w-[40rem] py-[5%]" src={image} alt="phones"/>
            </header>
            <ul className="flex gap-4 bg-waves mt-[5%] py-[5%] px-[11.5%]">
                <li className="flex flex-col gap-2">
                    <header>
                        <h3 className="flex gap-2 text-2xl font-semibold text-white"><img src={navigation}
                                                                                          className="icon"/>Personalized
                        </h3>
                    </header>
                    <p className="text-base text-white">A personalized weather report that shows the best time and
                        place for couples to enjoy outdoor activities based on their preferences and location.</p>

                </li>
                <li className="flex flex-col gap-2">
                    <header>
                        <h3 className="flex gap-2 text-2xl font-semibold text-white"><img src={status}
                                                                                          className="icon"/>Gallery
                        </h3>
                    </header>
                    <p className="text-base text-white">A cloud gallery that allows users to upload and share their
                        photos and videos of the sky and the weather with other users and get feedback and tips.</p>
                </li>
                <li>
                    <header className="flex flex-col gap-2">
                        <h3 className="flex gap-2 text-2xl font-semibold text-white"><img src={files} className="icon"/>Mood
                            Tracker</h3>
                        <p className="text-base text-white">A mood tracker that analyzes the user’s mood based on the
                            weather and suggests activities, music, or quotes to cheer them up or calm them down.</p>
                    </header>
                </li>
            </ul>
            <div className="Bg-clouds">
                <div className="flex gap-4 px-[17%] py-[5%] items-start">
                    <img className="w-[50%]" src={iphone} alt="Iphone"/>
                    <div className="flex flex-col gap-2 py-[5%]">
                        <h2 className="text-5xl text-white font-semibold leading-tight">Plan Your Outdoor Activities
                            with Ease</h2>
                        <span className="text-black text-3xl font-semibold">Get notified before rain stops. Plan your outdoor activities</span>
                        <ul className="Check-list">
                            <li className="checked">Share your weather stories and photos.</li>
                            <li>Custom weather alerts and notifications.</li>
                            <li>Smart weather integrations for your home.</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-[10%] flex justify-around">
                    <div className="Carousel-review w-[40%]">
                        <button className="Carousel-review-left"></button>
                        <ul className="Carousel-review-list">
                            <li className="Carousel-review-item">
                                <p className="Carousel-review-text">Juniper is a great app for checking the weather.
                                    It's easy to use and has a beautiful interface. I love how it shows me the cloud
                                    patterns and predicts the weather for the next few days. It's like having a personal
                                    meteorologist in my pocket.</p>
                                <header className="Carousel-review-header">
                                    <img className="Carousel-review-avatar" src={user}/>
                                    <h3 className="Carousel-review-name">Priyanka </h3>
                                </header>
                                <span className="Carousel-review-label">Happy Customer</span>
                            </li>
                        </ul>
                        <button className="Carousel-review-right"></button>
                    </div>
                    <div className="Carousel-review w-[40%]">
                        <button className="Carousel-review-left"></button>
                        <ul className="Carousel-review-list">
                            <li className="Carousel-review-item">
                                <p className="Carousel-review-text">Juniper is a great app for checking the weather.
                                    It's easy to use and has a beautiful interface. I love how it shows me the cloud
                                    patterns and predicts the weather for the next few days. It's like having a personal
                                    meteorologist in my pocket.</p>
                                <header className="Carousel-review-header">
                                    <img className="Carousel-review-avatar" src={user}/>
                                    <h3 className="Carousel-review-name">Priyanka </h3>
                                </header>
                                <span className="Carousel-review-label">Happy Customer</span>
                            </li>
                        </ul>
                        <button className="Carousel-review-right"></button>
                    </div>
                </div>
            </div>
            <section className="bg-accent pt-[10%] px-[25%]">
                <header className="text-center">
                    <h2 className="font-semibold text-5xl text-white leading-tight">The Weather App That Brings You Wonder</h2>
                    <span className="font-medium text-base text-black">We care about your happiness and well-being, no matter the weather</span>
                </header>
                <ul className="FAQ mt-16">
                    <li className="FAQ-item">
                        <details className="FAQ-details">
                            <summary className="FAQ-summary">How can I customize the Juniper app to suit my needs?
                            </summary>
                            <p className="FAQ-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                asperiores
                                consequatur deserunt eius enim, eos harum in laborum maiores nemo nobis numquam
                                quisquam recusandae, repellat saepe similique tenetur vel vero?</p>
                        </details>
                    </li>
                    <li className="FAQ-item">
                        <details className="FAQ-details">
                            <summary className="FAQ-summary">How can I share my weather updates with my partner?</summary>
                            <p className="FAQ-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                asperiores
                                consequatur deserunt eius enim, eos harum in laborum maiores nemo nobis numquam
                                quisquam recusandae, repellat saepe similique tenetur vel vero?</p>
                        </details>
                    </li>
                    <li className="FAQ-item">
                        <details className="FAQ-details">
                            <summary className="FAQ-summary">How long is the free trial for the Juniper app?</summary>
                            <p className="FAQ-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                asperiores
                                consequatur deserunt eius enim, eos harum in laborum maiores nemo nobis numquam
                                quisquam recusandae, repellat saepe similique tenetur vel vero?</p>
                        </details>
                    </li>
                    <li className="FAQ-item">
                        <details className="FAQ-details">
                            <summary className="FAQ-summary">What happens after the free trial ends?</summary>
                            <p className="FAQ-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                asperiores
                                consequatur deserunt eius enim, eos harum in laborum maiores nemo nobis numquam
                                quisquam recusandae, repellat saepe similique tenetur vel vero?</p>
                        </details>
                    </li>
                </ul>
            </section>
            <footer className="pt-[10%] px-[25%] bg-accent flex flex-col gap-4 items-center text-center">
                <span className="font-semibold text-2xl text-accent-5">Experience the weather like never before</span>
                <span className="font-semibold text-4xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">The Only Weather App You Need to Stay Connected with Nature and Each Other</span>
                <button className="Button-black text-xl px-8 py-3 rounded-[0.6rem]">Download now</button>
            </footer>
        </>
    )
}

export default Landing;