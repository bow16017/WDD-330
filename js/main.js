const links = [
	{
		label: 'Week1 notes',
		url: 'week1/index.html'
	},
    {
		label: 'Week2 notes',
		url: 'week2/index.html'
	},
    {
		label: 'Week3 notes',
		url: 'week3/index.html'
	},
    {
		label: 'Week4 notes',
		url: 'week4/index.html'
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