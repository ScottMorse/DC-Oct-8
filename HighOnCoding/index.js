
document.innerHTML = "<!DOCTYPE HTML>\n" + document.innerHTML

const title = document.createElement('title')

const bootstrap = document.createElement('link')
bootstrap.rel = "stylesheet"
bootstrap.href = "bootstrap.css"

const docStyle = document.createElement('style')
docStyle.innerHTML = `
    .header {
        background-color: lightblue;
        margin-bottom: 20px;
    }
    .featured {
        background-color: lightgrey;
    }
    .status {
        background-color: orange;
        height: 40px;
        color: white;
    }
`

title.innerHTML = "High On Coding"

document.head.appendChild(title)
document.head.appendChild(bootstrap)
document.head.appendChild(docStyle)


const headerMainDiv = document.createElement('div')
headerMainDiv.classList.add("row","header")

headerMainDiv.innerHTML = `
    <div class="col-8">
        <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><h1>High On Coding</h1></div>
        </div>
    </div>
    <div class="col-4">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="index.html" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="categories.html" role="tab" aria-controls="v-pills-profile" aria-selected="false">Categories</a>
        </div>
    </div>
`

document.body.appendChild(headerMainDiv)

const docMain = document.createElement('main')

docMain.innerHTML = `
    <div class="container featured">
        <h2>Curse of the Current Reviews</h2>
        <p class="container">
            When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scrolls past the application description completely avoiding it like ads dispalyed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshot, and reviews.
        </p>
    </div>
    <div class="container">
        <h3>Hello WatchKit</h3>
        <p class="container">
            Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the devlopers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and devloping apps for the Apple Watch.
        </p>
        <div class="nav status">
            <p class="nav-link">12 comments</p>
            <p class="nav-link">124 likes</p>
        </div>
    </div>
    <div class="container">
        <h3>Introduction to Swift</h3>
        <p class="container">
            Swift is a modern programming language devloped by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and future direction.  This article will revolve around the basic concepts in the Swift language and how you can get started.
        </p>
        <div class="nav status">
            <p class="nav-link">15 comments</p>
            <p class="nav-link">45 likes</p>
        </div>
    </div>
`

document.body.appendChild(docMain)