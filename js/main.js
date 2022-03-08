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
	},
    {
		label: 'Week5 notes',
		url: 'week5/index.html'
	},
    {
		label: 'ToDo Application',
		url: 'todo/index.html'
	},
    {
		label: 'Week7 notes',
		url: 'week7/index.html'
	},
    {
		label: 'Week8 notes',
		url: 'week8/index.html'
	},
    {
		label: 'Week9 notes',
		url: 'week9/index.html'
	},
    {
		label: 'Week10 notes',
		url: 'week10/index.html'
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