let random=(number)=>{
  return  Math.floor(Math.random()*number);
}
//console.log(random(7));
let allMessages={
    name:['Elizabeth','Macbeth','Jupiter','Mina','Anwar','Kingbush'],
    animals: ['Dog','Parot','Leopard','Chameleon','Frog'],
    infomation:['"Pray to God"','"Trust no one"','"Believe in youself"','"Change your Life"',' "be a Pastor oneday"'],
    suggestions:['"play more"','"start schooling"','"Quit this game"','"go out and eat"','"know who you are"']
}

let messageBox=[];
//console.log(allMessages)

for(let key in allMessages){
    let info= random(allMessages[key].length)

    switch(key){
        case 'animals':
            messageBox.push(`You like ${allMessages[key][info]} as your pet`)
            break;
            case 'name':
                messageBox.push(`I dont know your name but for now i'll call you ${allMessages[key][info]} `)
                break;
            case 'infomation':
                messageBox.push(`You need to ${allMessages[key][info]} and there will be a change`)
                break;
                case 'suggestions':
                  messageBox.push(`I'll advice you to  ${allMessages[key][info]} in order to enjoy as you like`)
                     break;
                     
    }
}
console.log(messageBox)