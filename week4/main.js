class gothicMonster {
    constructor(name, job, likes, dislikes, description) {
        this.name = name;
        this.job = job;
        this.likes = likes;
        this.dislikes = dislikes;
        this.description = description;
    }
    headline() {
        return `Hi, my name is ${this.name}.`;
    }
    jobline(){
        return `I am a professional ${this.job}.`;
    }
    likesline(){
        return `I like ${this.likes}.`;
    }
    dislikesline(){
        return `I dislike ${this.dislikes}.`;
    }
    descline(){
        return `I am ${this.description}.`;
    }
}

const gwyn = new gothicMonster('Gwynplaine', 'Clown/Jester', 'making people happy, Family, Privacy', 'Kidnappers, Politicians, Ulterior Motives', 'a tall Frenchman with a permanent smile');

const q = new gothicMonster('Quasimodo', 'Bellringer', 'Woodworking, Heights, Gargoyles', 'Pillories, Murderers, Bigotry', 'a man with a big heart, wanting nothing but belonging');

const hyde = new gothicMonster('Mr. Hyde', 'Hedonist', 'Violence, Wealth, Women', 'Dr. Jekyll, Moderation, Decency', 'a man with a plan');

window.onload = function gothicMs() {
    document.getElementById("m1Name").innerHTML = gwyn.headline();
    document.getElementById("m1Job").innerHTML = gwyn.jobline();
    document.getElementById("m1Likes").innerHTML = gwyn.likesline();
    document.getElementById("m1Dislikes").innerHTML = gwyn.dislikesline();
    document.getElementById("m1Description").innerHTML = gwyn.descline();
    
    document.getElementById("m2Name").innerHTML = q.headline();
    document.getElementById("m2Job").innerHTML = q.jobline();
    document.getElementById("m2Likes").innerHTML = q.likesline();
    document.getElementById("m2Dislikes").innerHTML = q.dislikesline();
    document.getElementById("m2Description").innerHTML = q.descline();
    
    document.getElementById("m3Name").innerHTML = hyde.headline();
    document.getElementById("m3Job").innerHTML = hyde.jobline();
    document.getElementById("m3Likes").innerHTML = hyde.likesline();
    document.getElementById("m3Dislikes").innerHTML = hyde.dislikesline();
    document.getElementById("m3Description").innerHTML = hyde.descline();
}



function math() {
    var total = 0
    var name = document.getElementById("name").value
    
    if (document.getElementById('18th').checked) {
        total = total + 1;
    }
    if (document.getElementById('st1').checked) {
        total = total + 1;
    }
    if (document.getElementById('st2').checked) {
        total = total + 1;
    }
    if (document.getElementById('st3').checked) {
        total = total + 1;
    }
    if (document.getElementById('st4').checked) {
        total = total + 1;
    }
    if (document.getElementById('st5').checked) {
        total = total + 1;
    }
    if (document.getElementById('st6').checked) {
        total = total + 1;
    }
    if (document.getElementById('st7').checked) {
        total = total + 1;
    }
    
    let perc = (total/8)*100;
    
    document.getElementById("results").innerHTML = name + ", you are %" + perc + " Gothic Monster.";
    

    }