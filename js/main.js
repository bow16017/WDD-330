const links = [
	{
		label: 'Week1 notes',
		url: 'week1/index.html'
	}
];

const ol = document.querySelector("ol");

for (const item of links) {
    const listitem = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", item.url);
    link.textContent = item.label;
    listitem.setAttribute("id", "indexLink");
    listitem.appendChild(link);
    
    ol.appendChild(listitem);
}