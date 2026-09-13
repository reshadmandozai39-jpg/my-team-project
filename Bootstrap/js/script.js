const presentationLogic = document.getElementById('presentationLogic');

if (presentationLogic) {
	new Function(presentationLogic.textContent)();
}

const gridRange = document.getElementById('gridRange');
const gridValue = document.getElementById('gridValue');
const gridCodeValues = document.querySelectorAll('.grid-code-value');
const gridCodeValue = document.getElementById('gridCodeValue');
const dynamicCards = document.querySelectorAll('.dynamic-grid-card');
const nestedNumber = document.getElementById('nestedNumber');
const nestedValue = document.getElementById('nestedValue');
const nestedLeft = document.querySelector('.nested-left');
const nestedRight = document.querySelector('.nested-right');
const breakpointInputs = document.querySelectorAll('input[name="breakpoint"]');
const breakpointBadge = document.getElementById('activeBreakpointBadge');
const breakpointRows = document.querySelectorAll('.breakpoint-table tbody tr');
const breakpointCards = document.querySelectorAll('.breakpoint-card');
const breakpointCatImages = [
	'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=85',
	'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=85',
	'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=85',
	'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=600&q=85',
	'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=85',
	'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=600&q=85',
	'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=600&q=85',
	'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=85',
	'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=600&q=85',
	'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&w=600&q=85',
	'https://images.unsplash.com/photo-1615789591457-74a63395c990?auto=format&fit=crop&w=600&q=85',
	'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=600&q=85',
];
const breakpointColumns = {
	xs: 1,
	sm: 2,
	md: 3,
	lg: 4,
	xl: 6,
	xxl: 12,
};
breakpointCards.forEach((card, index) => {
	card.innerHTML = `<div class="card border-0 shadow-sm overflow-hidden"><img class="breakpoint-cat-image" src="${breakpointCatImages[index]}" alt="Breakpoint Katze ${index + 1}" /><div class="card-body py-2 text-center">Card ${index + 1}</div></div>`;
});
const typographySelect = document.getElementById('typographySelect');
const typographyClass = document.getElementById('typographyClass');
const typographyHeadings = {
	h1: document.getElementById('typographyH1'),
	h2: document.getElementById('typographyH2'),
	h3: document.getElementById('typographyH3'),
	h4: document.getElementById('typographyH4'),
	h5: document.getElementById('typographyH5'),
	h6: document.getElementById('typographyH6'),
};
const deviceFrame = document.getElementById('deviceFrame');
const deviceTitle = document.getElementById('deviceTitle');
const videoPreview = document.getElementById('videoPreview');
const responsiveVideo = document.getElementById('responsiveVideo');
const videoSource = document.getElementById('videoSource');
const videoFallback = document.getElementById('videoFallback');
const videoSize = document.getElementById('videoSize');
const videoSizeValue = document.getElementById('videoSizeValue');
const videoRatioLabel = document.getElementById('videoRatioLabel');
const videoCodeRatio = document.getElementById('videoCodeRatio');
const videoChoices = document.querySelectorAll('.video-choice');
const videoSources = [
	'https://commons.wikimedia.org/wiki/Special:FilePath/Cat%20playing%20with%20a%20lizard.webm',
	'https://commons.wikimedia.org/wiki/Special:FilePath/Cat%20playing%20with%20a%20lizard.webm',
	'https://commons.wikimedia.org/wiki/Special:FilePath/Cat%20playing%20with%20a%20lizard.webm',
	'https://commons.wikimedia.org/wiki/Special:FilePath/Cat%20playing%20with%20a%20lizard.webm',
];
const ratioLabels = {
	'1x1': 'ratio-1x1 · Quadrat',
	'4x3': 'ratio-4x3 · älteres Bildschirmformat',
	'16x9': 'ratio-16x9 · normales Videoformat / YouTube',
	'21x9': 'ratio-21x9 · ultrabreites Kinoformat',
};
const inboxCount = document.getElementById('inboxCount');
const inboxValueDisplay = document.getElementById('inboxValueDisplay');
const incrementInbox = document.getElementById('incrementInbox');
const decrementInbox = document.getElementById('decrementInbox');
const selectedButtonColor = document.getElementById('selectedButtonColor');
const buttonChoices = document.querySelectorAll('.button-choice');
let inboxValue = 0;

function updateGrid(value = gridRange.value) {
	const safe = Math.min(Math.max(Number(value) || 1, 1), 12);
	gridRange.value = safe;
	gridValue.textContent = safe;
	gridCodeValue.textContent = safe;
	gridCodeValues.forEach((item) => (item.textContent = safe));

	dynamicCards.forEach((card) => {
		card.classList.remove(
			'col-1',
			'col-2',
			'col-3',
			'col-4',
			'col-5',
			'col-6',
			'col-7',
			'col-8',
			'col-9',
			'col-10',
			'col-11',
			'col-12',
		);
		card.classList.add(`col-${safe}`);
	});
}

function syncNestedInputs(value) {
	const safe = Math.min(Math.max(Number(value) || 3, 1), 12);
	nestedNumber.value = safe;
	nestedValue.textContent = safe;
	return safe;
}

function updateNestedGrid() {
	const value = syncNestedInputs(nestedNumber.value || 3);
	nestedLeft.classList.remove(
		'col-sm-1',
		'col-sm-2',
		'col-sm-3',
		'col-sm-4',
		'col-sm-5',
		'col-sm-6',
		'col-sm-7',
		'col-sm-8',
		'col-sm-9',
		'col-sm-10',
		'col-sm-11',
		'col-sm-12',
	);
	nestedRight.classList.remove(
		'col-sm-1',
		'col-sm-2',
		'col-sm-3',
		'col-sm-4',
		'col-sm-5',
		'col-sm-6',
		'col-sm-7',
		'col-sm-8',
		'col-sm-9',
		'col-sm-10',
		'col-sm-11',
		'col-sm-12',
	);
	nestedLeft.classList.add(`col-sm-${value}`);
	nestedRight.classList.add(`col-sm-${12 - value}`);
	nestedLeft.firstElementChild.textContent = `Level 1: .col-sm-${value}`;
	nestedRight.firstElementChild.children[0].firstElementChild.textContent = `Level 2: .col-8 .col-sm-6 · Aussen: ${12 - value} Spalten`;
}

function updateBreakpointVisual() {
	const selected = document.querySelector('input[name="breakpoint"]:checked');
	const breakpoint = selected ? selected.value : 'xs';
	const columns = breakpointColumns[breakpoint];
	breakpointBadge.textContent = `Aktiv: ${breakpoint} · ${columns} pro Reihe`;

	breakpointRows.forEach((row) => {
		row.classList.toggle('active', row.dataset.breakpoint === breakpoint);
	});

	breakpointCards.forEach((card) => {
		card.classList.remove(
			'col-1',
			'col-2',
			'col-3',
			'col-4',
			'col-6',
			'col-12',
		);
		card.classList.add(`col-${12 / columns}`);
	});
}

function updateTypography() {
	const selected = typographySelect.value;
	Object.entries(typographyHeadings).forEach(([name, heading]) => {
		heading.classList.toggle('d-none', name !== selected);
	});
	typographyClass.textContent = `Aktiv: .${selected}`;
}

function updateDevicePreview() {
	const selected = document.querySelector('input[name="device"]:checked').value;
	const titles = {
		phone: 'Small phone Ansicht',
		'phone-large': 'Phone Ansicht',
		tablet: 'Tablet Ansicht',
		laptop: 'Laptop Ansicht',
		desktop: 'Desktop Ansicht',
		wide: 'Wide Desktop Ansicht',
	};
	deviceFrame.className = `device-frame ${selected}`;
	deviceTitle.textContent = titles[selected];
}

function updateVideoRatio() {
	const selected = document.querySelector(
		'input[name="videoRatio"]:checked',
	).value;
	videoPreview.className = `video-preview ratio ratio-${selected}`;
	videoRatioLabel.textContent = ratioLabels[selected];
	videoCodeRatio.textContent = selected;
}

function updateVideoSize() {
	videoPreview.style.setProperty('--video-size', `${videoSize.value}%`);
	videoSizeValue.textContent = `${videoSize.value}%`;
}

function updateVideoSource(button) {
	videoChoices.forEach((choice) => choice.classList.remove('active'));
	button.classList.add('active');
	responsiveVideo.classList.remove('d-none');
	videoFallback.classList.add('d-none');
	videoSource.src = videoSources[Number(button.dataset.video)];
	responsiveVideo.load();
	responsiveVideo.play().catch(() => {});
}

responsiveVideo.addEventListener('error', () => {
	responsiveVideo.classList.add('d-none');
	videoFallback.classList.remove('d-none');
});

function updateInboxCount() {
	inboxValueDisplay.textContent = inboxValue > 99 ? '99+' : inboxValue;
	inboxCount.style.display = inboxValue > 0 ? '' : 'none';
}

const bootstrapColors = {
	blue: [
		'#cfe2ff',
		'#9ec5fe',
		'#6ea8fe',
		'#3d8bfd',
		'#0d6efd',
		'#0a58ca',
		'#084298',
		'#052c65',
		'#031633',
	],
	indigo: [
		'#e0cffc',
		'#c29ffa',
		'#a370f7',
		'#8540f5',
		'#6610f2',
		'#520dc2',
		'#3d0a91',
		'#290661',
		'#140330',
	],
	purple: [
		'#e2d9f3',
		'#c5b3e6',
		'#a98eda',
		'#8c68cd',
		'#6f42c1',
		'#59359a',
		'#432874',
		'#2c1a4d',
		'#160d26',
	],
	pink: [
		'#f7d6e6',
		'#efadce',
		'#e685b5',
		'#de5c9d',
		'#d63384',
		'#ab296a',
		'#801f4f',
		'#561535',
		'#2b0b1a',
	],
	red: [
		'#f8d7da',
		'#f1aeb5',
		'#ea868f',
		'#e35d6a',
		'#dc3545',
		'#b02a37',
		'#842029',
		'#58151c',
		'#2c0b0e',
	],
	orange: [
		'#ffe5d0',
		'#fecba1',
		'#feb272',
		'#fd9843',
		'#fd7e14',
		'#ca6510',
		'#984c0c',
		'#653208',
		'#331904',
	],
	yellow: [
		'#fff3cd',
		'#ffe69c',
		'#ffda6a',
		'#ffcd39',
		'#ffc107',
		'#cc9a06',
		'#997404',
		'#664d03',
		'#332701',
	],
	green: [
		'#d1e7dd',
		'#a3cfbb',
		'#75b798',
		'#479f76',
		'#198754',
		'#146c43',
		'#0f5132',
		'#0a3622',
		'#051b11',
	],
	teal: [
		'#d2f4ea',
		'#a6e9d5',
		'#79dfc1',
		'#4dd4ac',
		'#20c997',
		'#1aa179',
		'#13795b',
		'#0d503c',
		'#06281e',
	],
	cyan: [
		'#cff4fc',
		'#9eeaf9',
		'#6edff6',
		'#3dd5f3',
		'#0dcaf0',
		'#0aa2c0',
		'#087990',
		'#055160',
		'#032830',
	],
	gray: [
		'#f8f9fa',
		'#e9ecef',
		'#dee2e6',
		'#ced4da',
		'#adb5bd',
		'#6c757d',
		'#495057',
		'#343a40',
		'#212529',
	],
	black: ['#000000'],
	white: ['#ffffff'],
};

const colorGrid = document.getElementById('colorGrid');
const colorSearch = document.getElementById('colorSearch');
const colorEmpty = document.getElementById('colorEmpty');
const selectedColorName = document.getElementById('selectedColorName');
const selectedColorButton = document.getElementById('selectedColorButton');

function renderColors(searchTerm = '') {
	const term = searchTerm.trim().toLowerCase();
	colorGrid.innerHTML = '';
	let visibleColors = 0;

	Object.entries(bootstrapColors).forEach(([colorName, shades]) => {
		shades.forEach((hex, index) => {
			const shade = (index + 1) * 100;
			const name = `${colorName}-${shade}`;
			if (term && !name.includes(term) && !hex.includes(term)) return;

			visibleColors += 1;
			const column = document.createElement('div');
			column.className = 'col';
			column.innerHTML = `
							<div class="color-card h-100">
								<div class="color-swatch" style="background: ${hex}"></div>
								<div class="color-meta">
									<strong class="d-block">$${name}</strong>
									<small class="text-muted d-block mb-2">${hex}</small>
									<button class="btn btn-sm btn-outline-dark w-100 use-color" data-name="${name}" data-hex="${hex}">Verwenden</button>
								</div>
							</div>`;
			colorGrid.appendChild(column);
		});
	});

	colorEmpty.classList.toggle('d-none', visibleColors !== 0);
	colorGrid.querySelectorAll('.use-color').forEach((button) => {
		button.addEventListener('click', () => {
			selectedColorName.textContent = button.dataset.name;
			selectedColorButton.style.backgroundColor = button.dataset.hex;
			selectedColorButton.style.borderColor = button.dataset.hex;
			selectedColorButton.classList.remove('btn-primary');
		});
	});
}

colorSearch.addEventListener('input', () => renderColors(colorSearch.value));

document.querySelectorAll('.needs-validation').forEach((form) => {
	const successMessage = form.querySelector('#formSuccessMessage');
	form.addEventListener('submit', (event) => {
		if (!form.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
			successMessage.classList.add('d-none');
		} else {
			event.preventDefault();
			successMessage.classList.remove('d-none');
			successMessage.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
			});
		}
		form.classList.add('was-validated');
	});
});

gridRange.addEventListener('input', () => updateGrid(gridRange.value));
nestedNumber.addEventListener('input', () => updateNestedGrid());
breakpointInputs.forEach((radio) => {
	radio.addEventListener('change', updateBreakpointVisual);
});
typographySelect.addEventListener('change', updateTypography);
document.querySelectorAll('input[name="device"]').forEach((radio) => {
	radio.addEventListener('change', updateDevicePreview);
});
document.querySelectorAll('input[name="videoRatio"]').forEach((radio) => {
	radio.addEventListener('change', updateVideoRatio);
});
videoSize.addEventListener('input', updateVideoSize);
videoChoices.forEach((button) => {
	button.addEventListener('click', () => updateVideoSource(button));
});
incrementInbox.addEventListener('click', () => {
	inboxValue += 1;
	updateInboxCount();
});
decrementInbox.addEventListener('click', () => {
	inboxValue = Math.max(0, inboxValue - 1);
	updateInboxCount();
});
buttonChoices.forEach((button) => {
	button.addEventListener('click', () => {
		buttonChoices.forEach((choice) => choice.classList.remove('selected'));
		button.classList.add('selected');
		selectedButtonColor.textContent = button.dataset.buttonColor;
	});
});

updateGrid();
updateNestedGrid();
updateBreakpointVisual();
updateTypography();
updateDevicePreview();
updateVideoRatio();
updateVideoSize();
renderColors();
