const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.filechooser,
		C3.Plugins.TextBox,
		C3.Plugins.Sprite
	];
};
self.C3_JsPropNameTable = [
	{ВыборФайла: 0},
	{ВводТекста: 0},
	{фывыфвыф: 0},
	{ВыборФайла2: 0},
	{Спрайт: 0}
];

self.InstanceType = {
	ВыборФайла: class extends self.IWorldInstance {},
	ВводТекста: class extends self.ITextInputInstance {},
	фывыфвыф: class extends self.ITextInputInstance {},
	ВыборФайла2: class extends self.IWorldInstance {},
	Спрайт: class extends self.ISpriteInstance {}
}