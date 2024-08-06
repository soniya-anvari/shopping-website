import styles from "./About.module.css";

function About() {
    return ( <
        div className = { styles.container } >
        <
        h1 > About < /h1> <
        hr / >
        <
        p className = { styles.title1 } > Proin eu ante vel mauris molestie dignissim non eget nunc.Integer ac massa orci.Suspendisse vulputate semper nunc eget rhoncus. < /p> <
        p className = { styles.title2 } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin eu ante vel mauris molestie dignissim non eget nunc.Integer ac massa orci.Suspendisse vulputate semper nunc eget rhoncus.Ut sit amet porta sem, interdum tincidunt libero.Nulla vel quam lobortis, varius est scelerisque, dapibus nisl. < /p> <
        div className = { styles.imgContainer } >
        <
        div >
        <
        p >
        The Mission <
        /p> <
        h3 > At the heart of everything, we set out to offer the best quality. < /h3> <
        hr / >

        <
        /div> <
        div >
        <
        p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin eu ante vel mauris molestie dignissim non eget nunc.Integer ac massa orci.Suspendisse vulputate semper nunc eget rhoncus.Aenean placerat facilisis ex, eu laoreet lorem convallis. < /p> <
        p > Fusce gravida justo a lectus tempus lacinia.Ut mollis scelerisque ultricies.Aenean facilisis efficitur magna, at feugiat massa bibendum at.Etiam ut venenatis urna. < /p> < /
        div > <
        /div> <
        div className = { styles.started } >
        <
        h2 >
        How it Started <
        /h2> <
        hr / >
        <
        p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. < /p>

        <
        /div> <
        div className = { styles.boxStarted } >
        <
        div >
        <
        h3 > Vel mauris molestie dignissim < /h3> <
        h5 > Proin eu ante vel mauris molestie dignissim non eget nunc.Integer ac massa orci.Suspendisse vulputate semper nunc eget rhoncus. < /h5> <
        p > Praesent vel faucibus ligula.Sed sit amet ipsum eget velit aliquet faucibus.Maecenas et odio id turpis sollicitudin pulvinar sit amet vitae augue.Phasellus nec ultricies arcu.Quisque efficitur tellus sit amet bibendum molestie.Duis id egestas odio.Phasellus lacinia ex quis faucibus tempor.Sed feugia. < /p>

        <
        /div> <
        div > < /div> <
        /div>

        <
        /div>
    )
}

export default About