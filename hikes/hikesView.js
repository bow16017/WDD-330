const imgs = 'https://bow16017.github.io/WDD-330/hikes2/images/';

class HikesView {
  renderHikeList(hikeListElement, hikeList) {

    hikeListElement.innerHTML = '';
    hikeList.forEach(hike => {
      hikeListElement.appendChild(this.renderOneHike(hike));
    });
  }
    
  renderOneHike(hike) {
    const item = document.createElement('li');
    item.setAttribute('data-name', hike.name);
    item.innerHTML = ` <h2>${hike.name}</h2>
<div class="wrapper">
<div class="imager">
    <img src="${imgs}${hike.imgSrc}" alt="${hike.imgAlt}">
</div>
<div class="info">
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>${hike.description}</p>
            </div>
            <div>
                <h3>How to get there</h3>
                <p>${hike.directions}</p>
            </div>
</div>
</div>
        
        `;

    return item;
  }
  
}
export default HikesView;