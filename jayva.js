// console.log();

let bank = 100

const players = [
    {
        name: "D'Marcus Williums",
        teamNumber: 0,
        emoji: '🏃‍♂️',
        skill: 10
    },
    {
        name: "Tyroil Smoochie-Wallace",
        teamNumber: 0,
        emoji: '🤾‍♂️',
        skill: 30
    },
    {
        name: "Jackmerius Tacktheratrix",
        teamNumber: 0,
        emoji: '🏇',
        skill: 88
    },
    {
        name: "Javaris Jamar Javarison-Lamar",
        teamNumber: 0,
        emoji: '🏌️‍♀️',
        skill: 15
    },
    {
        name: "D'Pez Poopsie",
        teamNumber: 0,
        emoji: '🏋️‍♂️',
        skill: 77
    },
    {
        name: "D'Jasper Probincrux III",
        teamNumber: 0,
        emoji: '🏌️‍♂️',
        skill: 21
    },
    {
        name: "Leoz Maxwell Jilliumz",
        teamNumber: 0,
        emoji: '🤾',
        skill: 5
    },
    {
        name: "Hingle McCringleberry",
        teamNumber: 0,
        emoji: '🏂',
        skill: 99
    },
    {
        name: "L'Carpetron Dookmarriot",
        teamNumber: 0,
        emoji: '🧘‍♀️',
        skill: 50
    },
    {
        name: "Xmus Jaxon Flaxon-Waxon",
        teamNumber: 0,
        emoji: '🚶‍♀️',
        skill: 1
    },
    {
        name: "Saggitariutt Jefferspin",
        teamNumber: 0,
        emoji: '🏋️‍♀️',
        skill: 61
    },
    {
        name: "Quatro Quatro",
        teamNumber: 0,
        emoji: '🤺',
        skill: 44
    },
    {
        name: "X-Wing @Aliciousness",
        teamNumber: 0,
        emoji: '🏄',
        skill: 71
    },
    {
        name: "Bisquiteen Trisket",
        teamNumber: 0,
        emoji: '🧜‍♂️',
        skill: 76
    },
    {
        name: "Scoish Velociraptor Maloish",
        teamNumber: 0,
        emoji: '🤸',
        skill: 47
    },
    {
        name: "Donkey Teeth",
        teamNumber: 0,
        emoji: '⛹️‍♀️',
        skill: 23
    },
    {
        name: "T.J. A.J. R.J. Backslashinfourth V",
        teamNumber: 0,
        emoji: '🕴️',
        skill: 58
    },
    {
        name: "Firstname Lastname",
        teamNumber: 0,
        emoji: '💃',
        skill: 99
    },
    {
        name: "Dan Smith",
        teamNumber: 0,
        emoji: '🧍‍♂️',
        skill: 3
    },
    {
        name: "Tiger",
        teamNumber: 0,
        emoji: '🐅',
        skill: 100
    },
]
function draftTeams() {

    players.forEach(teamOneMember => teamOneMember.teamNumber = Math.floor(Math.random() * 2))
    // console.log(players);
    teamReadout()
    teamReadoutButBlue()

}

function teamReadout() {
    let redTeam = ''

    const redTeamMembers = players.filter(redGuy => redGuy.teamNumber == 0)

    redTeamMembers.forEach(redMember => redTeam += redMember.emoji)

    const redTeamReadout = document.getElementById('redTeamReadout')
    redTeamReadout.innerText = redTeam
}
function teamReadoutButBlue() {
    let blueTeam = ''

    const blueTeamMembers = players.filter(blueGuy => blueGuy.teamNumber == 1)

    blueTeamMembers.forEach(blueMember => blueTeam += blueMember.emoji)

    const blueTeamReadout = document.getElementById('blueTeamReadout')
    blueTeamReadout.innerText = blueTeam
}

function redTeamSkillValue() {

    let totalSkillRed = 0

    const redTeamMembers = players.filter(redGuy => redGuy.teamNumber == 0)

    redTeamMembers.forEach(skillValue => totalSkillRed += skillValue.skill)
    // console.log(`${totalSkill}`);
    return totalSkillRed
}
function blueTeamSKillValue() {

    let totalSkillBlue = 0

    const blueTeamMembers = players.filter(blueGuy => blueGuy.teamNumber == 1)

    blueTeamMembers.forEach(skillValue => totalSkillBlue += skillValue.skill)
    // console.log(`${totalSkill}`);
    return totalSkillBlue
}

const bet = {
    team: '',
    value: 0
}

function bettingTotal(betValue, redorblue) {

    bet.value = betValue
    bet.team = redorblue

    const betReadout = document.getElementById('betActiveReadout')
    betReadout.innerHTML = Current Bet: bet.value

    const teamReadout = document.getElementById('teamBetActiveReadout')
    teamReadout.innerHTML = Team: bet.team

    console.log(`${bet.team} ${bet.value}`)
}

function teamBattle() {
    blueTeamSKillValue()
    redTeamSkillValue()
    const teamBlueSkillTotal = blueTeamSKillValue()
    const redTeamSkillTotal = redTeamSkillValue()

    if (teamBlueSkillTotal > redTeamSkillTotal) {
        if (bet.team == 'blue') {
            bank + bet.value
            window.alert('Hurray, Blue Team Won!', `You made: ${bet.value}`)
        }
        else {
            bank - bet.value
            window.alert('Aw man, looks like Blue Team won.', `You lost: ${bet.value}`)
        }
    }
    else {
        if (bet.team == 'red') {
            bank + bet.value
            window.alert('Hurray, Red Team Won!', `You made: ${bet.value}`)
        }
        else {
            bank - bet.value
            window.alert('Aw man, looks like Red Team won.', `You lost: ${bet.value}`)
        }

    }



}

