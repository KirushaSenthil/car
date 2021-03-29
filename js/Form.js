class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("Multiplayer Car Racing Game")
        title.position(260,100)
        var input=createInput("").attribute("placeholder","name")
        input.position(260,150)
        var button=createButton("Start")
        button.position(260,180)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var greeting=createElement('h3')
            var name= input.value()
            greeting.html(name)
            greeting.position(260,190)
        })

    }
    
    

}