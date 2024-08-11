import type { Country } from '.';

// I wish I remembered where I got this if you see this TELL ME
const countries = [
	{
		flags: {
			png: 'https://flagcdn.com/w320/md.png',
			svg: 'https://flagcdn.com/md.svg',
			alt: 'The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band.'
		},
		name: {
			common: 'Moldova',
			official: 'Republic of Moldova',
			nativeName: {
				ron: {
					official: 'Republica Moldova',
					common: 'Moldova'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['73']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/us.png',
			svg: 'https://flagcdn.com/us.svg',
			alt: 'The flag of the United States of America is composed of thirteen equal horizontal bands of red alternating with white. A blue rectangle, bearing fifty small five-pointed white stars arranged in nine rows where rows of six stars alternate with rows of five stars, is superimposed in the canton.'
		},
		name: {
			common: 'United States',
			official: 'United States of America',
			nativeName: {
				eng: {
					official: 'United States of America',
					common: 'United States'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: [
				'201',
				'202',
				'203',
				'205',
				'206',
				'207',
				'208',
				'209',
				'210',
				'212',
				'213',
				'214',
				'215',
				'216',
				'217',
				'218',
				'219',
				'220',
				'224',
				'225',
				'227',
				'228',
				'229',
				'231',
				'234',
				'239',
				'240',
				'248',
				'251',
				'252',
				'253',
				'254',
				'256',
				'260',
				'262',
				'267',
				'269',
				'270',
				'272',
				'274',
				'276',
				'281',
				'283',
				'301',
				'302',
				'303',
				'304',
				'305',
				'307',
				'308',
				'309',
				'310',
				'312',
				'313',
				'314',
				'315',
				'316',
				'317',
				'318',
				'319',
				'320',
				'321',
				'323',
				'325',
				'327',
				'330',
				'331',
				'334',
				'336',
				'337',
				'339',
				'346',
				'347',
				'351',
				'352',
				'360',
				'361',
				'364',
				'380',
				'385',
				'386',
				'401',
				'402',
				'404',
				'405',
				'406',
				'407',
				'408',
				'409',
				'410',
				'412',
				'413',
				'414',
				'415',
				'417',
				'419',
				'423',
				'424',
				'425',
				'430',
				'432',
				'434',
				'435',
				'440',
				'442',
				'443',
				'447',
				'458',
				'463',
				'464',
				'469',
				'470',
				'475',
				'478',
				'479',
				'480',
				'484',
				'501',
				'502',
				'503',
				'504',
				'505',
				'507',
				'508',
				'509',
				'510',
				'512',
				'513',
				'515',
				'516',
				'517',
				'518',
				'520',
				'530',
				'531',
				'534',
				'539',
				'540',
				'541',
				'551',
				'559',
				'561',
				'562',
				'563',
				'564',
				'567',
				'570',
				'571',
				'573',
				'574',
				'575',
				'580',
				'585',
				'586',
				'601',
				'602',
				'603',
				'605',
				'606',
				'607',
				'608',
				'609',
				'610',
				'612',
				'614',
				'615',
				'616',
				'617',
				'618',
				'619',
				'620',
				'623',
				'626',
				'628',
				'629',
				'630',
				'631',
				'636',
				'641',
				'646',
				'650',
				'651',
				'657',
				'660',
				'661',
				'662',
				'667',
				'669',
				'678',
				'681',
				'682',
				'701',
				'702',
				'703',
				'704',
				'706',
				'707',
				'708',
				'712',
				'713',
				'714',
				'715',
				'716',
				'717',
				'718',
				'719',
				'720',
				'724',
				'725',
				'727',
				'730',
				'731',
				'732',
				'734',
				'737',
				'740',
				'743',
				'747',
				'754',
				'757',
				'760',
				'762',
				'763',
				'765',
				'769',
				'770',
				'772',
				'773',
				'774',
				'775',
				'779',
				'781',
				'785',
				'786',
				'801',
				'802',
				'803',
				'804',
				'805',
				'806',
				'808',
				'810',
				'812',
				'813',
				'814',
				'815',
				'816',
				'817',
				'818',
				'828',
				'830',
				'831',
				'832',
				'843',
				'845',
				'847',
				'848',
				'850',
				'854',
				'856',
				'857',
				'858',
				'859',
				'860',
				'862',
				'863',
				'864',
				'865',
				'870',
				'872',
				'878',
				'901',
				'903',
				'904',
				'906',
				'907',
				'908',
				'909',
				'910',
				'912',
				'913',
				'914',
				'915',
				'916',
				'917',
				'918',
				'919',
				'920',
				'925',
				'928',
				'929',
				'930',
				'931',
				'934',
				'936',
				'937',
				'938',
				'940',
				'941',
				'947',
				'949',
				'951',
				'952',
				'954',
				'956',
				'959',
				'970',
				'971',
				'972',
				'973',
				'975',
				'978',
				'979',
				'980',
				'984',
				'985',
				'989'
			]
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/yt.png',
			svg: 'https://flagcdn.com/yt.svg',
			alt: ''
		},
		name: {
			common: 'Mayotte',
			official: 'Department of Mayotte',
			nativeName: {
				fra: {
					official: 'Département de Mayotte',
					common: 'Mayotte'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['62']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/nr.png',
			svg: 'https://flagcdn.com/nr.svg',
			alt: 'The flag of Nauru has a dark blue field with a thin yellow horizontal band across the center and a large white twelve-pointed star beneath the horizontal band on the hoist side of the field.'
		},
		name: {
			common: 'Nauru',
			official: 'Republic of Nauru',
			nativeName: {
				eng: {
					official: 'Republic of Nauru',
					common: 'Nauru'
				},
				nau: {
					official: 'Republic of Nauru',
					common: 'Nauru'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['74']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mz.png',
			svg: 'https://flagcdn.com/mz.svg',
			alt: 'The flag of Mozambique is composed of three equal horizontal bands of teal, black with white top and bottom edges, and yellow. A red isosceles triangle spanning about two-fifth the width of the field is superimposed on the hoist side with its base on the hoist end. This triangle bears a crossed rifle and hoe in black superimposed on an open white book which is superimposed on a five-pointed yellow star.'
		},
		name: {
			common: 'Mozambique',
			official: 'Republic of Mozambique',
			nativeName: {
				por: {
					official: 'República de Moçambique',
					common: 'Moçambique'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['58']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/br.png',
			svg: 'https://flagcdn.com/br.svg',
			alt: "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center."
		},
		name: {
			common: 'Brazil',
			official: 'Federative Republic of Brazil',
			nativeName: {
				por: {
					official: 'República Federativa do Brasil',
					common: 'Brasil'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['5']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cv.png',
			svg: 'https://flagcdn.com/cv.svg',
			alt: 'The flag of Cape Verde is composed of five horizontal bands of blue, white, red, white and blue in the ratio of 6:1:1:1:3. A ring of ten five-pointed yellow stars is centered at three-eighth of the height from the bottom edge and three-eighth of the width from the hoist end of the field.'
		},
		name: {
			common: 'Cape Verde',
			official: 'Republic of Cabo Verde',
			nativeName: {
				por: {
					official: 'República de Cabo Verde',
					common: 'Cabo Verde'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['38']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gq.png',
			svg: 'https://flagcdn.com/gq.svg',
			alt: 'The flag of Equatorial Guinea is composed of three equal horizontal bands of green, white and red with the national coat of arms centered in the white band and an isosceles triangle superimposed on the hoist side of the field. The triangle is light blue, has its base on the hoist end and spans about one-fifth the width of the field.'
		},
		name: {
			common: 'Equatorial Guinea',
			official: 'Republic of Equatorial Guinea',
			nativeName: {
				fra: {
					official: 'République de la Guinée Équatoriale',
					common: 'Guinée équatoriale'
				},
				por: {
					official: 'República da Guiné Equatorial',
					common: 'Guiné Equatorial'
				},
				spa: {
					official: 'República de Guinea Ecuatorial',
					common: 'Guinea Ecuatorial'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['40']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/al.png',
			svg: 'https://flagcdn.com/al.svg',
			alt: 'The flag of Albania features a silhouetted double-headed black eagle at the center of a red field.'
		},
		name: {
			common: 'Albania',
			official: 'Republic of Albania',
			nativeName: {
				sqi: {
					official: 'Republika e Shqipërisë',
					common: 'Shqipëria'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['55']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/vi.png',
			svg: 'https://flagcdn.com/vi.svg',
			alt: ''
		},
		name: {
			common: 'United States Virgin Islands',
			official: 'Virgin Islands of the United States',
			nativeName: {
				eng: {
					official: 'Virgin Islands of the United States',
					common: 'United States Virgin Islands'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['340']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/nu.png',
			svg: 'https://flagcdn.com/nu.svg',
			alt: ''
		},
		name: {
			common: 'Niue',
			official: 'Niue',
			nativeName: {
				eng: {
					official: 'Niue',
					common: 'Niue'
				},
				niu: {
					official: 'Niuē',
					common: 'Niuē'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['83']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/pw.png',
			svg: 'https://flagcdn.com/pw.svg',
			alt: 'The flag of Palau has a light blue field with a large golden-yellow circle that is offset slightly towards the hoist side of center.'
		},
		name: {
			common: 'Palau',
			official: 'Republic of Palau',
			nativeName: {
				eng: {
					official: 'Republic of Palau',
					common: 'Palau'
				},
				pau: {
					official: 'Beluu er a Belau',
					common: 'Belau'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['80']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ng.png',
			svg: 'https://flagcdn.com/ng.svg',
			alt: 'The flag of Nigeria is composed of three equal vertical bands of green, white and green.'
		},
		name: {
			common: 'Nigeria',
			official: 'Federal Republic of Nigeria',
			nativeName: {
				eng: {
					official: 'Federal Republic of Nigeria',
					common: 'Nigeria'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['34']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/vg.png',
			svg: 'https://flagcdn.com/vg.svg',
			alt: ''
		},
		name: {
			common: 'British Virgin Islands',
			official: 'Virgin Islands',
			nativeName: {
				eng: {
					official: 'Virgin Islands',
					common: 'British Virgin Islands'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['284']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gm.png',
			svg: 'https://flagcdn.com/gm.svg',
			alt: 'The flag of Gambia is composed of three equal horizontal bands of red, blue with white top and bottom edges, and green.'
		},
		name: {
			common: 'Gambia',
			official: 'Republic of the Gambia',
			nativeName: {
				eng: {
					official: 'Republic of the Gambia',
					common: 'Gambia'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['20']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/so.png',
			svg: 'https://flagcdn.com/so.svg',
			alt: 'The flag of Somalia features a large five-pointed white star centered on a light blue field.'
		},
		name: {
			common: 'Somalia',
			official: 'Federal Republic of Somalia',
			nativeName: {
				ara: {
					official: 'جمهورية الصومال‎‎',
					common: 'الصومال‎‎'
				},
				som: {
					official: 'Jamhuuriyadda Federaalka Soomaaliya',
					common: 'Soomaaliya'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['52']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ye.png',
			svg: 'https://flagcdn.com/ye.svg',
			alt: 'The flag of Yemen is composed of three equal horizontal bands of red, white and black.'
		},
		name: {
			common: 'Yemen',
			official: 'Republic of Yemen',
			nativeName: {
				ara: {
					official: 'الجمهورية اليمنية',
					common: 'اليَمَن'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['67']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/my.png',
			svg: 'https://flagcdn.com/my.svg',
			alt: 'The flag of Malaysia is composed of fourteen equal horizontal bands of red alternating with white. A blue rectangle, bearing a fly-side facing yellow crescent and a fourteen-pointed yellow star placed just outside the crescent opening, is superimposed in the canton.'
		},
		name: {
			common: 'Malaysia',
			official: 'Malaysia',
			nativeName: {
				eng: {
					official: 'Malaysia',
					common: 'Malaysia'
				},
				msa: {
					official: 'مليسيا',
					common: 'مليسيا'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['0']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/dm.png',
			svg: 'https://flagcdn.com/dm.svg',
			alt: 'The flag of Dominica has a green field with a large centered tricolor cross. The vertical and horizontal parts of the cross each comprise three bands of yellow, black and white. A red circle, bearing a hoist-side facing purple Sisserou parrot standing on a twig and encircled by ten five-pointed yellow-edged green stars, is superimposed at the center of the cross.'
		},
		name: {
			common: 'Dominica',
			official: 'Commonwealth of Dominica',
			nativeName: {
				eng: {
					official: 'Commonwealth of Dominica',
					common: 'Dominica'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['767']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gb.png',
			svg: 'https://flagcdn.com/gb.svg',
			alt: 'The flag of the United Kingdom — the Union Jack — has a blue field. It features the white-edged red cross of Saint George superimposed on the diagonal red cross of Saint Patrick which is superimposed on the diagonal white cross of Saint Andrew.'
		},
		name: {
			common: 'United Kingdom',
			official: 'United Kingdom of Great Britain and Northern Ireland',
			nativeName: {
				eng: {
					official: 'United Kingdom of Great Britain and Northern Ireland',
					common: 'United Kingdom'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['4']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mg.png',
			svg: 'https://flagcdn.com/mg.svg',
			alt: 'The flag of Madagascar features a white vertical band on the hoist side that takes up about one-third the width of the field, and two equal horizontal bands of red and green adjoining the vertical band.'
		},
		name: {
			common: 'Madagascar',
			official: 'Republic of Madagascar',
			nativeName: {
				fra: {
					official: 'République de Madagascar',
					common: 'Madagascar'
				},
				mlg: {
					official: "Repoblikan'i Madagasikara",
					common: 'Madagasikara'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['61']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/eh.png',
			svg: 'https://flagcdn.com/eh.svg',
			alt: ''
		},
		name: {
			common: 'Western Sahara',
			official: 'Sahrawi Arab Democratic Republic',
			nativeName: {
				ber: {
					official: 'Sahrawi Arab Democratic Republic',
					common: 'Western Sahara'
				},
				mey: {
					official: 'الجمهورية العربية الصحراوية الديمقراطية',
					common: 'الصحراء الغربية'
				},
				spa: {
					official: 'República Árabe Saharaui Democrática',
					common: 'Sahara Occidental'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['125288', '125289']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cy.png',
			svg: 'https://flagcdn.com/cy.svg',
			alt: 'The flag of Cyprus has a white field, at the center of which is a copper-colored silhouette of the Island of Cyprus above two green olive branches crossed at the stem.'
		},
		name: {
			common: 'Cyprus',
			official: 'Republic of Cyprus',
			nativeName: {
				ell: {
					official: 'Δημοκρατία της Κύπρος',
					common: 'Κύπρος'
				},
				tur: {
					official: 'Kıbrıs Cumhuriyeti',
					common: 'Kıbrıs'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['57']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ag.png',
			svg: 'https://flagcdn.com/ag.svg',
			alt: 'The flag of Antigua and Barbuda has a red field with an inverted isosceles triangle based on the top edge and spanning the height of the field. This triangle has three horizontal bands of black, light blue and white, with the light blue band half the height of the two other bands. The top half of a golden-yellow sun is situated in the lower two-third of the black band to depict a rising sun.'
		},
		name: {
			common: 'Antigua and Barbuda',
			official: 'Antigua and Barbuda',
			nativeName: {
				eng: {
					official: 'Antigua and Barbuda',
					common: 'Antigua and Barbuda'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['268']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ie.png',
			svg: 'https://flagcdn.com/ie.svg',
			alt: 'The flag of Ireland is composed of three equal vertical bands of green, white and orange.'
		},
		name: {
			common: 'Ireland',
			official: 'Republic of Ireland',
			nativeName: {
				eng: {
					official: 'Republic of Ireland',
					common: 'Ireland'
				},
				gle: {
					official: 'Poblacht na hÉireann',
					common: 'Éire'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['53']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/py.png',
			svg: 'https://flagcdn.com/py.svg',
			alt: 'The flag of Paraguay features three equal horizontal bands of red, white and blue, with an emblem centered in the white band. On the obverse side of the flag depicted, this emblem is the national coat of arms.'
		},
		name: {
			common: 'Paraguay',
			official: 'Republic of Paraguay',
			nativeName: {
				grn: {
					official: 'Tetã Paraguái',
					common: 'Paraguái'
				},
				spa: {
					official: 'República de Paraguay',
					common: 'Paraguay'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['95']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/lk.png',
			svg: 'https://flagcdn.com/lk.svg',
			alt: 'The flag of Sri Lanka features two large adjacent but separate rectangular areas, centered on a golden-yellow field. The smaller hoist-side rectangle is divided into two equal vertical bands of teal and orange, and the larger fly-side rectangle is maroon with a centered golden-yellow lion holding a Kastane sword in its right fore-paw and four golden-yellow Bo leaves, one in each corner.'
		},
		name: {
			common: 'Sri Lanka',
			official: 'Democratic Socialist Republic of Sri Lanka',
			nativeName: {
				sin: {
					official: 'ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජය',
					common: 'ශ්‍රී ලංකාව'
				},
				tam: {
					official: 'இலங்கை சனநாயக சோசலிசக் குடியரசு',
					common: 'இலங்கை'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['4']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/za.png',
			svg: 'https://flagcdn.com/za.svg',
			alt: 'The flag of South Africa is composed of two equal horizontal bands of red and blue, with a yellow-edged black isosceles triangle superimposed on the hoist side of the field. This triangle has its base centered on the hoist end, spans about two-fifth the width and two-third the height of the field, and is enclosed on its sides by the arms of a white-edged green horizontally oriented Y-shaped band which extends along the boundary of the red and blue bands to the fly end of the field.'
		},
		name: {
			common: 'South Africa',
			official: 'Republic of South Africa',
			nativeName: {
				afr: {
					official: 'Republiek van Suid-Afrika',
					common: 'South Africa'
				},
				eng: {
					official: 'Republic of South Africa',
					common: 'South Africa'
				},
				nbl: {
					official: 'IRiphabliki yeSewula Afrika',
					common: 'Sewula Afrika'
				},
				nso: {
					official: 'Rephaboliki ya Afrika-Borwa ',
					common: 'Afrika-Borwa'
				},
				sot: {
					official: 'Rephaboliki ya Afrika Borwa',
					common: 'Afrika Borwa'
				},
				ssw: {
					official: 'IRiphabhulikhi yeNingizimu Afrika',
					common: 'Ningizimu Afrika'
				},
				tsn: {
					official: 'Rephaboliki ya Aforika Borwa',
					common: 'Aforika Borwa'
				},
				tso: {
					official: 'Riphabliki ra Afrika Dzonga',
					common: 'Afrika Dzonga'
				},
				ven: {
					official: 'Riphabuḽiki ya Afurika Tshipembe',
					common: 'Afurika Tshipembe'
				},
				xho: {
					official: 'IRiphabliki yaseMzantsi Afrika',
					common: 'Mzantsi Afrika'
				},
				zul: {
					official: 'IRiphabliki yaseNingizimu Afrika',
					common: 'Ningizimu Afrika'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['7']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/kw.png',
			svg: 'https://flagcdn.com/kw.svg',
			alt: 'The flag of Kuwait is composed of three equal horizontal bands of green, white and red, with a black trapezium superimposed on the hoist side of the field. This trapezium has its base on the hoist end and spans about one-fourth the width of the field.'
		},
		name: {
			common: 'Kuwait',
			official: 'State of Kuwait',
			nativeName: {
				ara: {
					official: 'دولة الكويت',
					common: 'الكويت'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['65']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/dz.png',
			svg: 'https://flagcdn.com/dz.svg',
			alt: 'The flag of Algeria features two equal vertical bands of green and white. A five-pointed red star within a fly-side facing red crescent is centered over the two-color boundary.'
		},
		name: {
			common: 'Algeria',
			official: "People's Democratic Republic of Algeria",
			nativeName: {
				ara: {
					official: 'الجمهورية الديمقراطية الشعبية الجزائرية',
					common: 'الجزائر'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['13']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/hr.png',
			svg: 'https://flagcdn.com/hr.svg',
			alt: 'The flag of Croatia is composed of three equal horizontal bands of red, white and blue, with coat of arms of Croatia superimposed in the center.'
		},
		name: {
			common: 'Croatia',
			official: 'Republic of Croatia',
			nativeName: {
				hrv: {
					official: 'Republika Hrvatska',
					common: 'Hrvatska'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['85']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mq.png',
			svg: 'https://flagcdn.com/mq.svg',
			alt: ''
		},
		name: {
			common: 'Martinique',
			official: 'Martinique',
			nativeName: {
				fra: {
					official: 'Martinique',
					common: 'Martinique'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['96']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sl.png',
			svg: 'https://flagcdn.com/sl.svg',
			alt: 'The flag of Sierra Leone is composed of three equal horizontal bands of green, white and blue.'
		},
		name: {
			common: 'Sierra Leone',
			official: 'Republic of Sierra Leone',
			nativeName: {
				eng: {
					official: 'Republic of Sierra Leone',
					common: 'Sierra Leone'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['32']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mp.png',
			svg: 'https://flagcdn.com/mp.svg',
			alt: ''
		},
		name: {
			common: 'Northern Mariana Islands',
			official: 'Commonwealth of the Northern Mariana Islands',
			nativeName: {
				cal: {
					official: 'Commonwealth of the Northern Mariana Islands',
					common: 'Northern Mariana Islands'
				},
				cha: {
					official: 'Sankattan Siha Na Islas Mariånas',
					common: 'Na Islas Mariånas'
				},
				eng: {
					official: 'Commonwealth of the Northern Mariana Islands',
					common: 'Northern Mariana Islands'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['670']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/rw.png',
			svg: 'https://flagcdn.com/rw.svg',
			alt: 'The flag of Rwanda is composed of three horizontal bands of light blue, yellow and green. The light blue band is twice the height of the other two bands and bears a yellow sun with twenty-four rays on its fly side.'
		},
		name: {
			common: 'Rwanda',
			official: 'Republic of Rwanda',
			nativeName: {
				eng: {
					official: 'Republic of Rwanda',
					common: 'Rwanda'
				},
				fra: {
					official: 'République rwandaise',
					common: 'Rwanda'
				},
				kin: {
					official: "Repubulika y'u Rwanda",
					common: 'Rwanda'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['50']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sy.png',
			svg: 'https://flagcdn.com/sy.svg',
			alt: 'The flag of Syria is composed of three equal horizontal bands of red, white and black. At the center of the white band are two small five-pointed green stars arranged in a horizontal line.'
		},
		name: {
			common: 'Syria',
			official: 'Syrian Arab Republic',
			nativeName: {
				ara: {
					official: 'الجمهورية العربية السورية',
					common: 'سوريا'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['63']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/vc.png',
			svg: 'https://flagcdn.com/vc.svg',
			alt: 'The flag of Saint Vincent and the Grenadines is composed of three vertical bands of blue, gold and green. The gold band is twice as wide as the other two bands and bears three green diamonds arranged to form the letter V at its center.'
		},
		name: {
			common: 'Saint Vincent and the Grenadines',
			official: 'Saint Vincent and the Grenadines',
			nativeName: {
				eng: {
					official: 'Saint Vincent and the Grenadines',
					common: 'Saint Vincent and the Grenadines'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['784']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/xk.png',
			svg: 'https://flagcdn.com/xk.svg',
			alt: ''
		},
		name: {
			common: 'Kosovo',
			official: 'Republic of Kosovo',
			nativeName: {
				sqi: {
					official: 'Republika e Kosovës',
					common: 'Kosova'
				},
				srp: {
					official: 'Република Косово',
					common: 'Косово'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['83']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/lc.png',
			svg: 'https://flagcdn.com/lc.svg',
			alt: 'The flag of Saint Lucia has a light blue field, at the center of which are two triangles which share a common base — a small golden-yellow isosceles triangle superimposed on a large white-edged black isosceles triangle.'
		},
		name: {
			common: 'Saint Lucia',
			official: 'Saint Lucia',
			nativeName: {
				eng: {
					official: 'Saint Lucia',
					common: 'Saint Lucia'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['758']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/hn.png',
			svg: 'https://flagcdn.com/hn.svg',
			alt: 'The flag of Honduras is composed of three equal horizontal bands of turquoise, white and turquoise, with five small five-pointed turquoise stars arranged in a quincuncial pattern at the center of the white band.'
		},
		name: {
			common: 'Honduras',
			official: 'Republic of Honduras',
			nativeName: {
				spa: {
					official: 'República de Honduras',
					common: 'Honduras'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['04']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/jo.png',
			svg: 'https://flagcdn.com/jo.svg',
			alt: 'The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center.'
		},
		name: {
			common: 'Jordan',
			official: 'Hashemite Kingdom of Jordan',
			nativeName: {
				ara: {
					official: 'المملكة الأردنية الهاشمية',
					common: 'الأردن'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['62']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/tv.png',
			svg: 'https://flagcdn.com/tv.svg',
			alt: "The flag of Tuvalu has a light blue field with the flag of the United Kingdom — the Union Jack — in the canton. A representation of the country's nine Islands using nine five-pointed yellow stars is situated in the fly half of the field."
		},
		name: {
			common: 'Tuvalu',
			official: 'Tuvalu',
			nativeName: {
				eng: {
					official: 'Tuvalu',
					common: 'Tuvalu'
				},
				tvl: {
					official: 'Tuvalu',
					common: 'Tuvalu'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['88']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/np.png',
			svg: 'https://flagcdn.com/np.svg',
			alt: "The flag of Nepal is the world's only non-quadrilateral flag of a sovereign country. It takes the shape of two adjoining right-angled triangles and has a crimson red field with deep blue edges. Within the smaller upper triangle is an emblem of the upper half of a white sun resting on an upward facing white crescent. The lower triangle bears a white sun with twelve rays."
		},
		name: {
			common: 'Nepal',
			official: 'Federal Democratic Republic of Nepal',
			nativeName: {
				nep: {
					official: 'नेपाल संघीय लोकतान्त्रिक गणतन्त्र',
					common: 'नेपाल'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['77']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/lr.png',
			svg: 'https://flagcdn.com/lr.svg',
			alt: 'The flag of Liberia is composed of eleven equal horizontal bands of red alternating with white. A blue square bearing a five-pointed white star is superimposed in the canton.'
		},
		name: {
			common: 'Liberia',
			official: 'Republic of Liberia',
			nativeName: {
				eng: {
					official: 'Republic of Liberia',
					common: 'Liberia'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['31']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/hm.png',
			svg: 'https://flagcdn.com/hm.svg',
			alt: ''
		},
		name: {
			common: 'Heard Island and McDonald Islands',
			official: 'Heard Island and McDonald Islands',
			nativeName: {
				eng: {
					official: 'Heard Island and McDonald Islands',
					common: 'Heard Island and McDonald Islands'
				}
			}
		},
		idd: {
			root: '',
			suffixes: []
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/at.png',
			svg: 'https://flagcdn.com/at.svg',
			alt: 'The flag of Austria is composed of three equal horizontal bands of red, white and red.'
		},
		name: {
			common: 'Austria',
			official: 'Republic of Austria',
			nativeName: {
				bar: {
					official: 'Republik Österreich',
					common: 'Österreich'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['3']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gg.png',
			svg: 'https://flagcdn.com/gg.svg',
			alt: ''
		},
		name: {
			common: 'Guernsey',
			official: 'Bailiwick of Guernsey',
			nativeName: {
				eng: {
					official: 'Bailiwick of Guernsey',
					common: 'Guernsey'
				},
				fra: {
					official: 'Bailliage de Guernesey',
					common: 'Guernesey'
				},
				nfr: {
					official: 'Dgèrnésiais',
					common: 'Dgèrnésiais'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['4']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cf.png',
			svg: 'https://flagcdn.com/cf.svg',
			alt: 'The flag of Central African Republic is composed of four equal horizontal bands of blue, white, green and yellow intersected at the center by a vertical red band of equal size as the horizontal bands. A yellow five-pointed star is situated on the hoist side of the blue band.'
		},
		name: {
			common: 'Central African Republic',
			official: 'Central African Republic',
			nativeName: {
				fra: {
					official: 'République centrafricaine',
					common: 'République centrafricaine'
				},
				sag: {
					official: 'Ködörösêse tî Bêafrîka',
					common: 'Bêafrîka'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['36']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mr.png',
			svg: 'https://flagcdn.com/mr.svg',
			alt: 'The flag of Mauritania has a green field with a thin red horizontal band at the top and bottom of the field. At the center of the field is a five-pointed yellow star above an upward facing yellow crescent.'
		},
		name: {
			common: 'Mauritania',
			official: 'Islamic Republic of Mauritania',
			nativeName: {
				ara: {
					official: 'الجمهورية الإسلامية الموريتانية',
					common: 'موريتانيا'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['22']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/dj.png',
			svg: 'https://flagcdn.com/dj.svg',
			alt: 'The flag of Djibouti is composed of two equal horizontal bands of light blue and light green, with a white isosceles triangle superimposed on the hoist side of the field. The triangle has its base on the hoist end, spans about two-fifth the width of the field and bears a red five-pointed star at its center.'
		},
		name: {
			common: 'Djibouti',
			official: 'Republic of Djibouti',
			nativeName: {
				ara: {
					official: 'جمهورية جيبوتي',
					common: 'جيبوتي‎'
				},
				fra: {
					official: 'République de Djibouti',
					common: 'Djibouti'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['53']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/fj.png',
			svg: 'https://flagcdn.com/fj.svg',
			alt: 'The flag of Fiji has a light blue field. It features the flag of the United Kingdom — the Union Jack — in the canton and the shield of the national coat of arms centered in the fly half.'
		},
		name: {
			common: 'Fiji',
			official: 'Republic of Fiji',
			nativeName: {
				eng: {
					official: 'Republic of Fiji',
					common: 'Fiji'
				},
				fij: {
					official: 'Matanitu Tugalala o Viti',
					common: 'Viti'
				},
				hif: {
					official: 'रिपब्लिक ऑफ फीजी',
					common: 'फिजी'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['79']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/no.png',
			svg: 'https://flagcdn.com/no.svg',
			alt: 'The flag of Norway has a red field with a large white-edged navy blue cross that extends to the edges of the field. The vertical part of this cross is offset towards the hoist side.'
		},
		name: {
			common: 'Norway',
			official: 'Kingdom of Norway',
			nativeName: {
				nno: {
					official: 'Kongeriket Noreg',
					common: 'Noreg'
				},
				nob: {
					official: 'Kongeriket Norge',
					common: 'Norge'
				},
				smi: {
					official: 'Norgga gonagasriika',
					common: 'Norgga'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['7']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/lv.png',
			svg: 'https://flagcdn.com/lv.svg',
			alt: 'The flag of Latvia has a carmine-red field with a thin white horizontal band across the middle of the field.'
		},
		name: {
			common: 'Latvia',
			official: 'Republic of Latvia',
			nativeName: {
				lav: {
					official: 'Latvijas Republikas',
					common: 'Latvija'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['71']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/fk.png',
			svg: 'https://flagcdn.com/fk.svg',
			alt: ''
		},
		name: {
			common: 'Falkland Islands',
			official: 'Falkland Islands',
			nativeName: {
				eng: {
					official: 'Falkland Islands',
					common: 'Falkland Islands'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['00']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/kz.png',
			svg: 'https://flagcdn.com/kz.svg',
			alt: 'The flag of Kazakhstan has a turquoise field, at the center of which is a gold sun with thirty-two rays above a soaring golden steppe eagle. A thin vertical band displays a national ornamental pattern — koshkar-muiz — in gold near the hoist end.'
		},
		name: {
			common: 'Kazakhstan',
			official: 'Republic of Kazakhstan',
			nativeName: {
				kaz: {
					official: 'Қазақстан Республикасы',
					common: 'Қазақстан'
				},
				rus: {
					official: 'Республика Казахстан',
					common: 'Казахстан'
				}
			}
		},
		idd: {
			root: '+7',
			suffixes: ['6', '7']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ax.png',
			svg: 'https://flagcdn.com/ax.svg',
			alt: ''
		},
		name: {
			common: 'Åland Islands',
			official: 'Åland Islands',
			nativeName: {
				swe: {
					official: 'Landskapet Åland',
					common: 'Åland'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['5818']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/tm.png',
			svg: 'https://flagcdn.com/tm.svg',
			alt: 'The flag of Turkmenistan has a green field. It features a red vertical band, bearing five carpet guls stacked above two crossed olive branches, near the hoist end of the field. Just to the fly side of the vertical band near the top edge of the field is a hoist-side facing white crescent and five small five-pointed white stars placed just outside the crescent opening.'
		},
		name: {
			common: 'Turkmenistan',
			official: 'Turkmenistan',
			nativeName: {
				rus: {
					official: 'Туркменистан',
					common: 'Туркмения'
				},
				tuk: {
					official: 'Türkmenistan',
					common: 'Türkmenistan'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['93']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cc.png',
			svg: 'https://flagcdn.com/cc.svg',
			alt: ''
		},
		name: {
			common: 'Cocos (Keeling) Islands',
			official: 'Territory of the Cocos (Keeling) Islands',
			nativeName: {
				eng: {
					official: 'Territory of the Cocos (Keeling) Islands',
					common: 'Cocos (Keeling) Islands'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['1']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bg.png',
			svg: 'https://flagcdn.com/bg.svg',
			alt: 'The flag of Bulgaria is composed of three equal horizontal bands of white, green and red.'
		},
		name: {
			common: 'Bulgaria',
			official: 'Republic of Bulgaria',
			nativeName: {
				bul: {
					official: 'Република България',
					common: 'България'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['59']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/tk.png',
			svg: 'https://flagcdn.com/tk.svg',
			alt: ''
		},
		name: {
			common: 'Tokelau',
			official: 'Tokelau',
			nativeName: {
				eng: {
					official: 'Tokelau',
					common: 'Tokelau'
				},
				smo: {
					official: 'Tokelau',
					common: 'Tokelau'
				},
				tkl: {
					official: 'Tokelau',
					common: 'Tokelau'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['90']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/nc.png',
			svg: 'https://flagcdn.com/nc.svg',
			alt: ''
		},
		name: {
			common: 'New Caledonia',
			official: 'New Caledonia',
			nativeName: {
				fra: {
					official: 'Nouvelle-Calédonie',
					common: 'Nouvelle-Calédonie'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['87']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bb.png',
			svg: 'https://flagcdn.com/bb.svg',
			alt: 'The flag of Barbados is composed of three equal vertical bands of ultramarine, gold and ultramarine. The head of a black trident is centered in the gold band.'
		},
		name: {
			common: 'Barbados',
			official: 'Barbados',
			nativeName: {
				eng: {
					official: 'Barbados',
					common: 'Barbados'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['246']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/st.png',
			svg: 'https://flagcdn.com/st.svg',
			alt: 'The flag of South Sudan is composed of three equal horizontal bands of black, red with white top and bottom edges, and green. A blue equilateral triangle which spans about two-fifth the width of the field is superimposed on the hoist side with its base on the hoist end of the field. At the center of this triangle is a five-pointed yellow star.'
		},
		name: {
			common: 'São Tomé and Príncipe',
			official: 'Democratic Republic of São Tomé and Príncipe',
			nativeName: {
				por: {
					official: 'República Democrática do São Tomé e Príncipe',
					common: 'São Tomé e Príncipe'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['39']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/aq.png',
			svg: 'https://flagcdn.com/aq.svg',
			alt: ''
		},
		name: {
			common: 'Antarctica',
			official: 'Antarctica',
			nativeName: {}
		},
		idd: {
			root: '',
			suffixes: []
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bn.png',
			svg: 'https://flagcdn.com/bn.svg',
			alt: 'The flag of Brunei has a yellow field with two adjoining diagonal bands of white and black that extend from the upper hoist side of the field to the lower fly side. The red emblem of Brunei is centered on the field.'
		},
		name: {
			common: 'Brunei',
			official: 'Nation of Brunei, Abode of Peace',
			nativeName: {
				msa: {
					official: 'Nation of Brunei, Abode Damai',
					common: 'Negara Brunei Darussalam'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['73']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bt.png',
			svg: 'https://flagcdn.com/bt.svg',
			alt: 'The flag of Bhutan is divided diagonally, from the lower hoist-side corner to the upper fly-side corner, into an upper yellow and a lower orange triangle. A fly-side facing white dragon holding four jewels in its claws is situated along the boundary of the two triangles.'
		},
		name: {
			common: 'Bhutan',
			official: 'Kingdom of Bhutan',
			nativeName: {
				dzo: {
					official: 'འབྲུག་རྒྱལ་ཁབ་',
					common: 'འབྲུག་ཡུལ་'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['75']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cm.png',
			svg: 'https://flagcdn.com/cm.svg',
			alt: 'The flag of Cameroon is composed of three equal vertical bands of green, red and yellow, with a yellow five-pointed star in the center.'
		},
		name: {
			common: 'Cameroon',
			official: 'Republic of Cameroon',
			nativeName: {
				eng: {
					official: 'Republic of Cameroon',
					common: 'Cameroon'
				},
				fra: {
					official: 'République du Cameroun',
					common: 'Cameroun'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['37']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ar.png',
			svg: 'https://flagcdn.com/ar.svg',
			alt: 'The flag of Argentina features three equal horizontal bands of light blue, white and light blue. A brown-edged golden sun is centered in the white band.'
		},
		name: {
			common: 'Argentina',
			official: 'Argentine Republic',
			nativeName: {
				grn: {
					official: 'Argentine Republic',
					common: 'Argentina'
				},
				spa: {
					official: 'República Argentina',
					common: 'Argentina'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['4']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/az.png',
			svg: 'https://flagcdn.com/az.svg',
			alt: 'The flag of Azerbaijan features three equal horizontal bands of blue, red and green, with a white fly-side facing crescent and eight-pointed star centered in the red band.'
		},
		name: {
			common: 'Azerbaijan',
			official: 'Republic of Azerbaijan',
			nativeName: {
				aze: {
					official: 'Azərbaycan Respublikası',
					common: 'Azərbaycan'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['94']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mx.png',
			svg: 'https://flagcdn.com/mx.svg',
			alt: 'The flag of Mexico is composed of three equal vertical bands of green, white and red, with the national coat of arms centered in the white band.'
		},
		name: {
			common: 'Mexico',
			official: 'United Mexican States',
			nativeName: {
				spa: {
					official: 'Estados Unidos Mexicanos',
					common: 'México'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['2']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ma.png',
			svg: 'https://flagcdn.com/ma.svg',
			alt: 'The flag of Morocco features a green pentagram — a five-pointed linear star — centered on a red field.'
		},
		name: {
			common: 'Morocco',
			official: 'Kingdom of Morocco',
			nativeName: {
				ara: {
					official: 'المملكة المغربية',
					common: 'المغرب'
				},
				ber: {
					official: 'ⵜⴰⴳⵍⴷⵉⵜ ⵏ ⵍⵎⵖⵔⵉⴱ',
					common: 'ⵍⵎⴰⵖⵔⵉⴱ'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['12']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gt.png',
			svg: 'https://flagcdn.com/gt.svg',
			alt: 'The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band.'
		},
		name: {
			common: 'Guatemala',
			official: 'Republic of Guatemala',
			nativeName: {
				spa: {
					official: 'República de Guatemala',
					common: 'Guatemala'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['02']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ke.png',
			svg: 'https://flagcdn.com/ke.svg',
			alt: 'The flag of Kenya is composed of three equal horizontal bands of black, red with white top and bottom edges, and green. An emblem comprising a red, black and white Maasai shield covering two crossed white spears is superimposed at the center of the field.'
		},
		name: {
			common: 'Kenya',
			official: 'Republic of Kenya',
			nativeName: {
				eng: {
					official: 'Republic of Kenya',
					common: 'Kenya'
				},
				swa: {
					official: 'Republic of Kenya',
					common: 'Kenya'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['54']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mt.png',
			svg: 'https://flagcdn.com/mt.svg',
			alt: 'The flag of Malta is composed of two equal vertical bands of white and red. A representation of the George cross edged in red is situated on the upper hoist-side corner of the white band.'
		},
		name: {
			common: 'Malta',
			official: 'Republic of Malta',
			nativeName: {
				eng: {
					official: 'Republic of Malta',
					common: 'Malta'
				},
				mlt: {
					official: "Repubblika ta ' Malta",
					common: 'Malta'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['56']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cz.png',
			svg: 'https://flagcdn.com/cz.svg',
			alt: 'The flag of Czechia is composed of two equal horizontal bands of white and red, with a blue isosceles triangle superimposed on the hoist side of the field. The triangle has its base on the hoist end and spans about two-fifth the width of the field.'
		},
		name: {
			common: 'Czechia',
			official: 'Czech Republic',
			nativeName: {
				ces: {
					official: 'Česká republika',
					common: 'Česko'
				},
				slk: {
					official: 'Česká republika',
					common: 'Česko'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['20']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gi.png',
			svg: 'https://flagcdn.com/gi.svg',
			alt: ''
		},
		name: {
			common: 'Gibraltar',
			official: 'Gibraltar',
			nativeName: {
				eng: {
					official: 'Gibraltar',
					common: 'Gibraltar'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['50']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/aw.png',
			svg: 'https://flagcdn.com/aw.svg',
			alt: ''
		},
		name: {
			common: 'Aruba',
			official: 'Aruba',
			nativeName: {
				nld: {
					official: 'Aruba',
					common: 'Aruba'
				},
				pap: {
					official: 'Aruba',
					common: 'Aruba'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['97']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bl.png',
			svg: 'https://flagcdn.com/bl.svg',
			alt: ''
		},
		name: {
			common: 'Saint Barthélemy',
			official: 'Collectivity of Saint Barthélemy',
			nativeName: {
				fra: {
					official: 'Collectivité de Saint-Barthélemy',
					common: 'Saint-Barthélemy'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['90']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mc.png',
			svg: 'https://flagcdn.com/mc.svg',
			alt: 'The flag of Monaco is composed of two equal horizontal bands of red and white.'
		},
		name: {
			common: 'Monaco',
			official: 'Principality of Monaco',
			nativeName: {
				fra: {
					official: 'Principauté de Monaco',
					common: 'Monaco'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['77']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ae.png',
			svg: 'https://flagcdn.com/ae.svg',
			alt: 'The flag of United Arab Emirates features a red vertical band on its hoist side that takes up about one-fourth the width of the field and three equal horizontal bands of green, white and black adjoining the vertical band.'
		},
		name: {
			common: 'United Arab Emirates',
			official: 'United Arab Emirates',
			nativeName: {
				ara: {
					official: 'الإمارات العربية المتحدة',
					common: 'دولة الإمارات العربية المتحدة'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['71']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ss.png',
			svg: 'https://flagcdn.com/ss.svg',
			alt: 'The flag of South Sudan is composed of three equal horizontal bands of black, red with white top and bottom edges, and green. A blue equilateral triangle which spans about two-fifth the width of the field is superimposed on the hoist side with its base on the hoist end of the field. At the center of this triangle is a five-pointed yellow star.'
		},
		name: {
			common: 'South Sudan',
			official: 'Republic of South Sudan',
			nativeName: {
				eng: {
					official: 'Republic of South Sudan',
					common: 'South Sudan'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['11']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/pr.png',
			svg: 'https://flagcdn.com/pr.svg',
			alt: ''
		},
		name: {
			common: 'Puerto Rico',
			official: 'Commonwealth of Puerto Rico',
			nativeName: {
				eng: {
					official: 'Commonwealth of Puerto Rico',
					common: 'Puerto Rico'
				},
				spa: {
					official: 'Estado Libre Asociado de Puerto Rico',
					common: 'Puerto Rico'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['787', '939']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sv.png',
			svg: 'https://flagcdn.com/sv.svg',
			alt: 'The flag of El Salvador is composed of three equal horizontal bands of cobalt blue, white and cobalt blue, with the national coat of arms centered in the white band.'
		},
		name: {
			common: 'El Salvador',
			official: 'Republic of El Salvador',
			nativeName: {
				spa: {
					official: 'República de El Salvador',
					common: 'El Salvador'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['03']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/fr.png',
			svg: 'https://flagcdn.com/fr.svg',
			alt: 'The flag of France is composed of three equal vertical bands of blue, white and red.'
		},
		name: {
			common: 'France',
			official: 'French Republic',
			nativeName: {
				fra: {
					official: 'République française',
					common: 'France'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['3']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ne.png',
			svg: 'https://flagcdn.com/ne.svg',
			alt: 'The flag of Niger features three equal horizontal bands of orange, white and green, with an orange circle centered in the white band.'
		},
		name: {
			common: 'Niger',
			official: 'Republic of Niger',
			nativeName: {
				fra: {
					official: 'République du Niger',
					common: 'Niger'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['27']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ci.png',
			svg: 'https://flagcdn.com/ci.svg',
			alt: 'The flag of Ivory Coast is composed of three equal vertical bands of orange, white and green.'
		},
		name: {
			common: 'Ivory Coast',
			official: "Republic of Côte d'Ivoire",
			nativeName: {
				fra: {
					official: "République de Côte d'Ivoire",
					common: "Côte d'Ivoire"
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['25']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gs.png',
			svg: 'https://flagcdn.com/gs.svg',
			alt: ''
		},
		name: {
			common: 'South Georgia',
			official: 'South Georgia and the South Sandwich Islands',
			nativeName: {
				eng: {
					official: 'South Georgia and the South Sandwich Islands',
					common: 'South Georgia'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['00']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bw.png',
			svg: 'https://flagcdn.com/bw.svg',
			alt: 'The flag of Botswana has a light blue field with a white-edged black horizontal band across its center.'
		},
		name: {
			common: 'Botswana',
			official: 'Republic of Botswana',
			nativeName: {
				eng: {
					official: 'Republic of Botswana',
					common: 'Botswana'
				},
				tsn: {
					official: 'Lefatshe la Botswana',
					common: 'Botswana'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['67']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/io.png',
			svg: 'https://flagcdn.com/io.svg',
			alt: ''
		},
		name: {
			common: 'British Indian Ocean Territory',
			official: 'British Indian Ocean Territory',
			nativeName: {
				eng: {
					official: 'British Indian Ocean Territory',
					common: 'British Indian Ocean Territory'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['46']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/uz.png',
			svg: 'https://flagcdn.com/uz.svg',
			alt: 'The flag of Uzbekistan is composed of three equal horizontal bands of turquoise, white with red top and bottom edges, and green. On the hoist side of the turquoise band is a fly-side facing white crescent and twelve five-pointed white stars arranged just outside the crescent opening in three rows comprising three, four and five stars.'
		},
		name: {
			common: 'Uzbekistan',
			official: 'Republic of Uzbekistan',
			nativeName: {
				rus: {
					official: 'Республика Узбекистан',
					common: 'Узбекистан'
				},
				uzb: {
					official: "O'zbekiston Respublikasi",
					common: 'O‘zbekiston'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['98']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/tn.png',
			svg: 'https://flagcdn.com/tn.svg',
			alt: 'The flag of Tunisia has a red field. A white circle bearing a five-pointed red star within a fly-side facing red crescent is situated at the center of the field.'
		},
		name: {
			common: 'Tunisia',
			official: 'Tunisian Republic',
			nativeName: {
				ara: {
					official: 'الجمهورية التونسية',
					common: 'تونس'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['16']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/hk.png',
			svg: 'https://flagcdn.com/hk.svg',
			alt: ''
		},
		name: {
			common: 'Hong Kong',
			official: "Hong Kong Special Administrative Region of the People's Republic of China",
			nativeName: {
				eng: {
					official: "Hong Kong Special Administrative Region of the People's Republic of China",
					common: 'Hong Kong'
				},
				zho: {
					official: '中华人民共和国香港特别行政区',
					common: '香港'
				}
			}
		},
		idd: {
			root: '+8',
			suffixes: ['52']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mk.png',
			svg: 'https://flagcdn.com/mk.svg',
			alt: 'The flag of North Macedonia has a red field, at the center of which is a golden-yellow sun with eight broadening rays that extend to the edges of the field.'
		},
		name: {
			common: 'North Macedonia',
			official: 'Republic of North Macedonia',
			nativeName: {
				mkd: {
					official: 'Република Северна Македонија',
					common: 'Македонија'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['89']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sr.png',
			svg: 'https://flagcdn.com/sr.svg',
			alt: 'The flag of Suriname is composed of five horizontal bands of green, white, red, white and green in the ratio of 2:1:4:1:2. A large five-pointed yellow star is centered in the red band.'
		},
		name: {
			common: 'Suriname',
			official: 'Republic of Suriname',
			nativeName: {
				nld: {
					official: 'Republiek Suriname',
					common: 'Suriname'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['97']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/be.png',
			svg: 'https://flagcdn.com/be.svg',
			alt: 'The flag of Belgium is composed of three equal vertical bands of black, yellow and red.'
		},
		name: {
			common: 'Belgium',
			official: 'Kingdom of Belgium',
			nativeName: {
				deu: {
					official: 'Königreich Belgien',
					common: 'Belgien'
				},
				fra: {
					official: 'Royaume de Belgique',
					common: 'Belgique'
				},
				nld: {
					official: 'Koninkrijk België',
					common: 'België'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['2']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/as.png',
			svg: 'https://flagcdn.com/as.svg',
			alt: ''
		},
		name: {
			common: 'American Samoa',
			official: 'American Samoa',
			nativeName: {
				eng: {
					official: 'American Samoa',
					common: 'American Samoa'
				},
				smo: {
					official: 'Sāmoa Amelika',
					common: 'Sāmoa Amelika'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['684']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sb.png',
			svg: 'https://flagcdn.com/sb.svg',
			alt: 'The flag of Solomon Islands features a thin yellow diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. Above and beneath this band are a blue and green triangle respectively. Five white five-pointed stars arranged in an X shape are situated on the hoist side of the upper blue triangle.'
		},
		name: {
			common: 'Solomon Islands',
			official: 'Solomon Islands',
			nativeName: {
				eng: {
					official: 'Solomon Islands',
					common: 'Solomon Islands'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['77']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ua.png',
			svg: 'https://flagcdn.com/ua.svg',
			alt: 'The flag of Ukraine is composed of two equal horizontal bands of blue and yellow.'
		},
		name: {
			common: 'Ukraine',
			official: 'Ukraine',
			nativeName: {
				ukr: {
					official: 'Україна',
					common: 'Україна'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['80']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/fi.png',
			svg: 'https://flagcdn.com/fi.svg',
			alt: 'The flag of Finland has a white field with a large blue cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side.'
		},
		name: {
			common: 'Finland',
			official: 'Republic of Finland',
			nativeName: {
				fin: {
					official: 'Suomen tasavalta',
					common: 'Suomi'
				},
				swe: {
					official: 'Republiken Finland',
					common: 'Finland'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['58']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bf.png',
			svg: 'https://flagcdn.com/bf.svg',
			alt: 'The flag of Burkina Faso features two equal horizontal bands of red and green, with a yellow five-pointed star in the center.'
		},
		name: {
			common: 'Burkina Faso',
			official: 'Burkina Faso',
			nativeName: {
				fra: {
					official: 'République du Burkina',
					common: 'Burkina Faso'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['26']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ba.png',
			svg: 'https://flagcdn.com/ba.svg',
			alt: 'The flag of Bosnia and Herzegovina has a blue field, at the center of which is a large yellow hoist-side facing right-angled triangle that is based on the top edge and spans the height of the field. Adjacent to the hypotenuse of this triangle are nine adjoining five-pointed white stars with the top and bottom stars cut in half by the edges of the field.'
		},
		name: {
			common: 'Bosnia and Herzegovina',
			official: 'Bosnia and Herzegovina',
			nativeName: {
				bos: {
					official: 'Bosna i Hercegovina',
					common: 'Bosna i Hercegovina'
				},
				hrv: {
					official: 'Bosna i Hercegovina',
					common: 'Bosna i Hercegovina'
				},
				srp: {
					official: 'Босна и Херцеговина',
					common: 'Босна и Херцеговина'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['87']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ir.png',
			svg: 'https://flagcdn.com/ir.svg',
			alt: 'The flag of Iran is composed of three equal horizontal bands of green, white and red. A red emblem of Iran is centered in the white band and Arabic inscriptions in white span the bottom edge of the green band and the top edge of the red band.'
		},
		name: {
			common: 'Iran',
			official: 'Islamic Republic of Iran',
			nativeName: {
				fas: {
					official: 'جمهوری اسلامی ایران',
					common: 'ایران'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['8']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cu.png',
			svg: 'https://flagcdn.com/cu.svg',
			alt: 'The flag of Cuba is composed of five equal horizontal bands of blue alternating with white and a red equilateral triangle superimposed on the hoist side of the field. The triangle has its base on the hoist end, spans about two-fifth the width of the field and bears a white five-pointed star at its center.'
		},
		name: {
			common: 'Cuba',
			official: 'Republic of Cuba',
			nativeName: {
				spa: {
					official: 'República de Cuba',
					common: 'Cuba'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['3']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/er.png',
			svg: 'https://flagcdn.com/er.svg',
			alt: 'The flag of Eritrea comprises three triangles — a large red isosceles triangle with its base spanning the hoist end and its apex at the midpoint on the fly end, and a green and blue right-angled triangle above and beneath the red triangle. On the hoist side of the red triangle is a golden vertical olive branch encircled by a golden olive wreath.'
		},
		name: {
			common: 'Eritrea',
			official: 'State of Eritrea',
			nativeName: {
				ara: {
					official: 'دولة إرتريا',
					common: 'إرتريا‎'
				},
				eng: {
					official: 'State of Eritrea',
					common: 'Eritrea'
				},
				tir: {
					official: 'ሃገረ ኤርትራ',
					common: 'ኤርትራ'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['91']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sk.png',
			svg: 'https://flagcdn.com/sk.svg',
			alt: 'The flag of Slovakia is composed of three equal horizontal bands of white, blue and red. The coat of arms of Slovakia is superimposed at the center of the field slightly towards the hoist side.'
		},
		name: {
			common: 'Slovakia',
			official: 'Slovak Republic',
			nativeName: {
				slk: {
					official: 'Slovenská republika',
					common: 'Slovensko'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['21']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/lt.png',
			svg: 'https://flagcdn.com/lt.svg',
			alt: 'The flag of Lithuania is composed of three equal horizontal bands of yellow, green and red.'
		},
		name: {
			common: 'Lithuania',
			official: 'Republic of Lithuania',
			nativeName: {
				lit: {
					official: 'Lietuvos Respublikos',
					common: 'Lietuva'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['70']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mf.png',
			svg: 'https://flagcdn.com/mf.svg',
			alt: ''
		},
		name: {
			common: 'Saint Martin',
			official: 'Saint Martin',
			nativeName: {
				fra: {
					official: 'Saint-Martin',
					common: 'Saint-Martin'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['90']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/pn.png',
			svg: 'https://flagcdn.com/pn.svg',
			alt: ''
		},
		name: {
			common: 'Pitcairn Islands',
			official: 'Pitcairn Group of Islands',
			nativeName: {
				eng: {
					official: 'Pitcairn Group of Islands',
					common: 'Pitcairn Islands'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['4']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gw.png',
			svg: 'https://flagcdn.com/gw.svg',
			alt: 'The flag of Guinea-Bissau features a red vertical band on its hoist side that takes up about two-fifth the width of the field, and two equal horizontal bands of yellow and green adjoining the vertical band. A five-pointed black star is centered in the vertical band.'
		},
		name: {
			common: 'Guinea-Bissau',
			official: 'Republic of Guinea-Bissau',
			nativeName: {
				por: {
					official: 'República da Guiné-Bissau',
					common: 'Guiné-Bissau'
				},
				pov: {
					official: 'República da Guiné-Bissau',
					common: 'Guiné-Bissau'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['45']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ms.png',
			svg: 'https://flagcdn.com/ms.svg',
			alt: ''
		},
		name: {
			common: 'Montserrat',
			official: 'Montserrat',
			nativeName: {
				eng: {
					official: 'Montserrat',
					common: 'Montserrat'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['664']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/tr.png',
			svg: 'https://flagcdn.com/tr.svg',
			alt: 'The flag of Turkey has a red field bearing a large fly-side facing white crescent and a smaller five-pointed white star placed just outside the crescent opening. The white crescent and star are offset slightly towards the hoist side of center.'
		},
		name: {
			common: 'Turkey',
			official: 'Republic of Turkey',
			nativeName: {
				tur: {
					official: 'Türkiye Cumhuriyeti',
					common: 'Türkiye'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['0']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ph.png',
			svg: 'https://flagcdn.com/ph.svg',
			alt: 'The flag of Philippines is composed of two equal horizontal bands of blue and red, with a white equilateral triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about two-fifth the width of the field and bears a central golden-yellow sun with eight rays and a five-pointed golden-yellow star at each vertex.'
		},
		name: {
			common: 'Philippines',
			official: 'Republic of the Philippines',
			nativeName: {
				eng: {
					official: 'Republic of the Philippines',
					common: 'Philippines'
				},
				fil: {
					official: 'Republic of the Philippines',
					common: 'Pilipinas'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['3']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/vu.png',
			svg: 'https://flagcdn.com/vu.svg',
			alt: "The flag of Vanuatu is composed of two equal horizontal bands of red and green, with a black isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about two-fifth the width of the field and is enclosed on its sides by the arms of a thin black-edged yellow horizontally oriented Y-shaped band which extends along the boundary of the red and green bands to the fly end of the field. A yellow boar's tusk encircling two yellow crossed namele leaves is centered in the triangle."
		},
		name: {
			common: 'Vanuatu',
			official: 'Republic of Vanuatu',
			nativeName: {
				bis: {
					official: 'Ripablik blong Vanuatu',
					common: 'Vanuatu'
				},
				eng: {
					official: 'Republic of Vanuatu',
					common: 'Vanuatu'
				},
				fra: {
					official: 'République de Vanuatu',
					common: 'Vanuatu'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['78']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bo.png',
			svg: 'https://flagcdn.com/bo.svg',
			alt: 'The flag of Bolivia is composed of three equal horizontal bands of red, yellow and green, with the national coat of arms centered in the yellow band.'
		},
		name: {
			common: 'Bolivia',
			official: 'Plurinational State of Bolivia',
			nativeName: {
				aym: {
					official: 'Wuliwya Suyu',
					common: 'Wuliwya'
				},
				grn: {
					official: 'Tetã Volívia',
					common: 'Volívia'
				},
				que: {
					official: 'Buliwya Mamallaqta',
					common: 'Buliwya'
				},
				spa: {
					official: 'Estado Plurinacional de Bolivia',
					common: 'Bolivia'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['91']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/kn.png',
			svg: 'https://flagcdn.com/kn.svg',
			alt: 'The flag of Saint Kitts and Nevis features two large five-pointed white stars within a yellow-edged black diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. Above and beneath this band are a green and red triangle respectively.'
		},
		name: {
			common: 'Saint Kitts and Nevis',
			official: 'Federation of Saint Christopher and Nevis',
			nativeName: {
				eng: {
					official: 'Federation of Saint Christopher and Nevis',
					common: 'Saint Kitts and Nevis'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['869']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ro.png',
			svg: 'https://flagcdn.com/ro.svg',
			alt: 'The flag of Romania is composed of three equal vertical bands of navy blue, yellow and red.'
		},
		name: {
			common: 'Romania',
			official: 'Romania',
			nativeName: {
				ron: {
					official: 'România',
					common: 'România'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['0']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/kh.png',
			svg: 'https://flagcdn.com/kh.svg',
			alt: 'The flag of Cambodia features three horizontal bands of blue, red and blue, with a white depiction of the temple complex, Angkor Wat centered in the red band.'
		},
		name: {
			common: 'Cambodia',
			official: 'Kingdom of Cambodia',
			nativeName: {
				khm: {
					official: 'ព្រះរាជាណាចក្រកម្ពុជា',
					common: 'Kâmpŭchéa'
				}
			}
		},
		idd: {
			root: '+8',
			suffixes: ['55']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/zw.png',
			svg: 'https://flagcdn.com/zw.svg',
			alt: 'The flag of Zimbabwe is composed of seven equal horizontal bands of green, yellow, red, black, red, yellow and green, with a white isosceles triangle superimposed on the hoist side of the field. This triangle is edged in black, spans about one-fourth the width of the field and has its base on the hoist end. A yellow Zimbabwe bird superimposed on a five-pointed red star is centered in the triangle.'
		},
		name: {
			common: 'Zimbabwe',
			official: 'Republic of Zimbabwe',
			nativeName: {
				bwg: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				eng: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				kck: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				khi: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				ndc: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				nde: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				nya: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				sna: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				sot: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				toi: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				tsn: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				tso: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				ven: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				xho: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				},
				zib: {
					official: 'Republic of Zimbabwe',
					common: 'Zimbabwe'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['63']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/je.png',
			svg: 'https://flagcdn.com/je.svg',
			alt: ''
		},
		name: {
			common: 'Jersey',
			official: 'Bailiwick of Jersey',
			nativeName: {
				eng: {
					official: 'Bailiwick of Jersey',
					common: 'Jersey'
				},
				fra: {
					official: 'Bailliage de Jersey',
					common: 'Jersey'
				},
				nrf: {
					official: 'Bailliage dé Jèrri',
					common: 'Jèrri'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['4']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/kg.png',
			svg: 'https://flagcdn.com/kg.svg',
			alt: 'The flag of Kyrgyzstan features a yellow sun with forty rays at the center of a red field. At the center of the sun is a stylized depiction of a tunduk.'
		},
		name: {
			common: 'Kyrgyzstan',
			official: 'Kyrgyz Republic',
			nativeName: {
				kir: {
					official: 'Кыргыз Республикасы',
					common: 'Кыргызстан'
				},
				rus: {
					official: 'Кыргызская Республика',
					common: 'Киргизия'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['96']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bq.png',
			svg: 'https://flagcdn.com/bq.svg',
			alt: ''
		},
		name: {
			common: 'Caribbean Netherlands',
			official: 'Bonaire, Sint Eustatius and Saba',
			nativeName: {
				nld: {
					official: 'Bonaire, Sint Eustatius en Saba',
					common: 'Caribisch Nederland'
				},
				pap: {
					official: 'Boneiru, Sint Eustatius y Saba',
					common: 'Boneiru, Sint Eustatius y Saba'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['99']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gy.png',
			svg: 'https://flagcdn.com/gy.svg',
			alt: 'The flag of Guyana has a green field with two isosceles triangles which share a common base on the hoist end. The smaller black-edged red triangle spanning half the width of the field is superimposed on the larger white-edged yellow triangle which spans the full width of the field.'
		},
		name: {
			common: 'Guyana',
			official: 'Co-operative Republic of Guyana',
			nativeName: {
				eng: {
					official: 'Co-operative Republic of Guyana',
					common: 'Guyana'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['92']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/um.png',
			svg: 'https://flagcdn.com/um.svg',
			alt: ''
		},
		name: {
			common: 'United States Minor Outlying Islands',
			official: 'United States Minor Outlying Islands',
			nativeName: {
				eng: {
					official: 'United States Minor Outlying Islands',
					common: 'United States Minor Outlying Islands'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['68']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/am.png',
			svg: 'https://flagcdn.com/am.svg',
			alt: 'The flag of Armenia is composed of three equal horizontal bands of red, blue and orange.'
		},
		name: {
			common: 'Armenia',
			official: 'Republic of Armenia',
			nativeName: {
				hye: {
					official: 'Հայաստանի Հանրապետություն',
					common: 'Հայաստան'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['74']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/lb.png',
			svg: 'https://flagcdn.com/lb.svg',
			alt: 'The flag of Lebanon is composed of three horizontal bands of red, white and red. The white band is twice the height of the red bands and bears a green Lebanese Cedar tree at its center.'
		},
		name: {
			common: 'Lebanon',
			official: 'Lebanese Republic',
			nativeName: {
				ara: {
					official: 'الجمهورية اللبنانية',
					common: 'لبنان'
				},
				fra: {
					official: 'République libanaise',
					common: 'Liban'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['61']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/me.png',
			svg: 'https://flagcdn.com/me.svg',
			alt: 'The flag of Montenegro features a large red central rectangular area surrounded by a golden-yellow border. The coat of arms of Montenegro is centered in the red rectangle.'
		},
		name: {
			common: 'Montenegro',
			official: 'Montenegro',
			nativeName: {
				cnr: {
					official: 'Црна Гора',
					common: 'Црна Гора'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['82']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gl.png',
			svg: 'https://flagcdn.com/gl.svg',
			alt: ''
		},
		name: {
			common: 'Greenland',
			official: 'Greenland',
			nativeName: {
				kal: {
					official: 'Kalaallit Nunaat',
					common: 'Kalaallit Nunaat'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['99']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/pg.png',
			svg: 'https://flagcdn.com/pg.svg',
			alt: 'The flag of Papua New Guinea is divided diagonally, from the upper hoist-side corner to the lower fly-side corner, into a lower black and an upper red triangle. On the hoist side of the lower black triangle is a representation of the Southern Cross constellation made up of one small and four larger five-pointed white stars. A golden Raggiana bird-of-paradise is situated on the fly side of the upper red triangle.'
		},
		name: {
			common: 'Papua New Guinea',
			official: 'Independent State of Papua New Guinea',
			nativeName: {
				eng: {
					official: 'Independent State of Papua New Guinea',
					common: 'Papua New Guinea'
				},
				hmo: {
					official: 'Independen Stet bilong Papua Niugini',
					common: 'Papua Niu Gini'
				},
				tpi: {
					official: 'Independen Stet bilong Papua Niugini',
					common: 'Papua Niugini'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['75']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/zm.png',
			svg: 'https://flagcdn.com/zm.svg',
			alt: 'The flag of Zambia has a green field, on the fly side of which is a soaring orange African fish eagle above a rectangular area divided into three equal vertical bands of red, black and orange.'
		},
		name: {
			common: 'Zambia',
			official: 'Republic of Zambia',
			nativeName: {
				eng: {
					official: 'Republic of Zambia',
					common: 'Zambia'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['60']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/tt.png',
			svg: 'https://flagcdn.com/tt.svg',
			alt: 'The flag of Trinidad and Tobago has a red field with a white-edged black diagonal band that extends from the upper hoist-side corner to the lower fly-side corner of the field.'
		},
		name: {
			common: 'Trinidad and Tobago',
			official: 'Republic of Trinidad and Tobago',
			nativeName: {
				eng: {
					official: 'Republic of Trinidad and Tobago',
					common: 'Trinidad and Tobago'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['868']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/tf.png',
			svg: 'https://flagcdn.com/tf.svg',
			alt: ''
		},
		name: {
			common: 'French Southern and Antarctic Lands',
			official: 'Territory of the French Southern and Antarctic Lands',
			nativeName: {
				fra: {
					official: 'Territoire des Terres australes et antarctiques françaises',
					common: 'Terres australes et antarctiques françaises'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['62']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/pe.png',
			svg: 'https://flagcdn.com/pe.svg',
			alt: 'The flag of Peru is composed of three equal vertical bands of red, white and red, with the national emblem centered in the white band.'
		},
		name: {
			common: 'Peru',
			official: 'Republic of Peru',
			nativeName: {
				aym: {
					official: 'Piruw Suyu',
					common: 'Piruw'
				},
				que: {
					official: 'Piruw Ripuwlika',
					common: 'Piruw'
				},
				spa: {
					official: 'República del Perú',
					common: 'Perú'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['1']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/se.png',
			svg: 'https://flagcdn.com/se.svg',
			alt: 'The flag of Sweden has a blue field with a large golden-yellow cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side.'
		},
		name: {
			common: 'Sweden',
			official: 'Kingdom of Sweden',
			nativeName: {
				swe: {
					official: 'Konungariket Sverige',
					common: 'Sverige'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['6']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sd.png',
			svg: 'https://flagcdn.com/sd.svg',
			alt: 'The flag of Sudan is composed of three equal horizontal bands of red, white and black, with a green isosceles triangle superimposed on the hoist side. The green triangle spans about two-fifth the width of the field with its base on the hoist end.'
		},
		name: {
			common: 'Sudan',
			official: 'Republic of the Sudan',
			nativeName: {
				ara: {
					official: 'جمهورية السودان',
					common: 'السودان'
				},
				eng: {
					official: 'Republic of the Sudan',
					common: 'Sudan'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['49']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/pm.png',
			svg: 'https://flagcdn.com/pm.svg',
			alt: ''
		},
		name: {
			common: 'Saint Pierre and Miquelon',
			official: 'Saint Pierre and Miquelon',
			nativeName: {
				fra: {
					official: 'Collectivité territoriale de Saint-Pierre-et-Miquelon',
					common: 'Saint-Pierre-et-Miquelon'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['08']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/om.png',
			svg: 'https://flagcdn.com/om.svg',
			alt: 'The flag of Oman features a red vertical band on the hoist side that takes up about one-fourth the width of the field, and three equal horizontal bands of white, red and green adjoining the vertical band. At the top of the vertical band is the white emblem of Oman.'
		},
		name: {
			common: 'Oman',
			official: 'Sultanate of Oman',
			nativeName: {
				ara: {
					official: 'سلطنة عمان',
					common: 'عمان'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['68']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/in.png',
			svg: 'https://flagcdn.com/in.svg',
			alt: 'The flag of India is composed of three equal horizontal bands of saffron, white and green. A navy blue wheel with twenty-four spokes — the Ashoka Chakra — is centered in the white band.'
		},
		name: {
			common: 'India',
			official: 'Republic of India',
			nativeName: {
				eng: {
					official: 'Republic of India',
					common: 'India'
				},
				hin: {
					official: 'भारत गणराज्य',
					common: 'भारत'
				},
				tam: {
					official: 'இந்தியக் குடியரசு',
					common: 'இந்தியா'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['1']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/tw.png',
			svg: 'https://flagcdn.com/tw.svg',
			alt: ''
		},
		name: {
			common: 'Taiwan',
			official: 'Republic of China (Taiwan)',
			nativeName: {
				zho: {
					official: '中華民國',
					common: '台灣'
				}
			}
		},
		idd: {
			root: '+8',
			suffixes: ['86']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mn.png',
			svg: 'https://flagcdn.com/mn.svg',
			alt: 'The flag of Mongolia is composed of three equal vertical bands of red, blue and red, with the national emblem — the Soyombo — in gold centered in the hoist-side red band.'
		},
		name: {
			common: 'Mongolia',
			official: 'Mongolia',
			nativeName: {
				mon: {
					official: 'Монгол улс',
					common: 'Монгол улс'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['76']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sn.png',
			svg: 'https://flagcdn.com/sn.svg',
			alt: 'The flag of Senegal is composed of three equal vertical bands of green, golden-yellow and red, with a five-pointed green star centered in the golden-yellow band.'
		},
		name: {
			common: 'Senegal',
			official: 'Republic of Senegal',
			nativeName: {
				fra: {
					official: 'République du Sénégal',
					common: 'Sénégal'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['21']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/tz.png',
			svg: 'https://flagcdn.com/tz.svg',
			alt: 'The flag of Tanzania features a yellow-edged black diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. Above and beneath this band are a green and light blue triangle respectively.'
		},
		name: {
			common: 'Tanzania',
			official: 'United Republic of Tanzania',
			nativeName: {
				eng: {
					official: 'United Republic of Tanzania',
					common: 'Tanzania'
				},
				swa: {
					official: 'Jamhuri ya Muungano wa Tanzania',
					common: 'Tanzania'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['55']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ca.png',
			svg: 'https://flagcdn.com/ca.svg',
			alt: 'The flag of Canada is composed of a red vertical band on the hoist and fly sides and a central white square that is twice the width of the vertical bands. A large eleven-pointed red maple leaf is centered in the white square.'
		},
		name: {
			common: 'Canada',
			official: 'Canada',
			nativeName: {
				eng: {
					official: 'Canada',
					common: 'Canada'
				},
				fra: {
					official: 'Canada',
					common: 'Canada'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cr.png',
			svg: 'https://flagcdn.com/cr.svg',
			alt: 'The flag of Costa Rica is composed of five horizontal bands of blue, white, red, white and blue. The central red band is twice the height of the other four bands.'
		},
		name: {
			common: 'Costa Rica',
			official: 'Republic of Costa Rica',
			nativeName: {
				spa: {
					official: 'República de Costa Rica',
					common: 'Costa Rica'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['06']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cn.png',
			svg: 'https://flagcdn.com/cn.svg',
			alt: 'The flag of China has a red field. In the canton are five yellow five-pointed stars — a large star and four smaller stars arranged in a vertical arc on the fly side of the large star.'
		},
		name: {
			common: 'China',
			official: "People's Republic of China",
			nativeName: {
				zho: {
					official: '中华人民共和国',
					common: '中国'
				}
			}
		},
		idd: {
			root: '+8',
			suffixes: ['6']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/co.png',
			svg: 'https://flagcdn.com/co.svg',
			alt: 'The flag of Colombia is composed of three horizontal bands of yellow, blue and red, with the yellow band twice the height of the other two bands.'
		},
		name: {
			common: 'Colombia',
			official: 'Republic of Colombia',
			nativeName: {
				spa: {
					official: 'República de Colombia',
					common: 'Colombia'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['7']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mm.png',
			svg: 'https://flagcdn.com/mm.svg',
			alt: 'The flag of Myanmar is composed of three equal horizontal bands of yellow, green and red, with a large five-pointed white star superimposed at the center of the field.'
		},
		name: {
			common: 'Myanmar',
			official: 'Republic of the Union of Myanmar',
			nativeName: {
				mya: {
					official: 'ပြည်ထောင်စု သမ္မတ မြန်မာနိုင်ငံတော်',
					common: 'မြန်မာ'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['5']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ru.png',
			svg: 'https://flagcdn.com/ru.svg',
			alt: 'The flag of Russia is composed of three equal horizontal bands of white, blue and red.'
		},
		name: {
			common: 'Russia',
			official: 'Russian Federation',
			nativeName: {
				rus: {
					official: 'Российская Федерация',
					common: 'Россия'
				}
			}
		},
		idd: {
			root: '+7',
			suffixes: ['3', '4', '5', '8', '9']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/kp.png',
			svg: 'https://flagcdn.com/kp.svg',
			alt: 'The flag of North Korea is composed of three horizontal bands — a large central white-edged red band, and a blue band above and beneath the red band. On the hoist side of the red band is a red five-pointed star within a white circle.'
		},
		name: {
			common: 'North Korea',
			official: "Democratic People's Republic of Korea",
			nativeName: {
				kor: {
					official: '조선민주주의인민공화국',
					common: '조선'
				}
			}
		},
		idd: {
			root: '+8',
			suffixes: ['50']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ky.png',
			svg: 'https://flagcdn.com/ky.svg',
			alt: ''
		},
		name: {
			common: 'Cayman Islands',
			official: 'Cayman Islands',
			nativeName: {
				eng: {
					official: 'Cayman Islands',
					common: 'Cayman Islands'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['345']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bv.png',
			svg: 'https://flagcdn.com/bv.svg',
			alt: ''
		},
		name: {
			common: 'Bouvet Island',
			official: 'Bouvet Island',
			nativeName: {
				nor: {
					official: 'Bouvetøya',
					common: 'Bouvetøya'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['7']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/by.png',
			svg: 'https://flagcdn.com/by.svg',
			alt: 'The flag of Belarus features a vertical band, with a white and red ornamental pattern, spanning about one-fifth the width of the field on the hoist side. Adjoining the vertical band are two horizontal bands of red and green, with the red band twice the height of the green band.'
		},
		name: {
			common: 'Belarus',
			official: 'Republic of Belarus',
			nativeName: {
				bel: {
					official: 'Рэспубліка Беларусь',
					common: 'Белару́сь'
				},
				rus: {
					official: 'Республика Беларусь',
					common: 'Беларусь'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['75']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/pt.png',
			svg: 'https://flagcdn.com/pt.svg',
			alt: 'The flag of Portugal is composed of two vertical bands of green and red in the ratio of 2:3, with the coat of arms of Portugal centered over the two-color boundary.'
		},
		name: {
			common: 'Portugal',
			official: 'Portuguese Republic',
			nativeName: {
				por: {
					official: 'República português',
					common: 'Portugal'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['51']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sz.png',
			svg: 'https://flagcdn.com/sz.svg',
			alt: 'The flag of Eswatini is composed of three horizontal bands — a large central yellow-edged red band, and a light blue band above and beneath the red band. The red band is three times the height of the blue bands and bears a centered emblem made up of a large black and white Nguni shield covering two spears and a staff decorated with feather tassels, all placed horizontally.'
		},
		name: {
			common: 'Eswatini',
			official: 'Kingdom of Eswatini',
			nativeName: {
				eng: {
					official: 'Kingdom of Eswatini',
					common: 'Eswatini'
				},
				ssw: {
					official: 'Umbuso weSwatini',
					common: 'eSwatini'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['68']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/pl.png',
			svg: 'https://flagcdn.com/pl.svg',
			alt: 'The flag of Poland is composed of two equal horizontal bands of white and red.'
		},
		name: {
			common: 'Poland',
			official: 'Republic of Poland',
			nativeName: {
				pol: {
					official: 'Rzeczpospolita Polska',
					common: 'Polska'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['8']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ch.png',
			svg: 'https://flagcdn.com/ch.svg',
			alt: 'The flag of Switzerland is square shaped. It features a white Swiss cross centered on a red field.'
		},
		name: {
			common: 'Switzerland',
			official: 'Swiss Confederation',
			nativeName: {
				fra: {
					official: 'Confédération suisse',
					common: 'Suisse'
				},
				gsw: {
					official: 'Schweizerische Eidgenossenschaft',
					common: 'Schweiz'
				},
				ita: {
					official: 'Confederazione Svizzera',
					common: 'Svizzera'
				},
				roh: {
					official: 'Confederaziun svizra',
					common: 'Svizra'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['1']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cg.png',
			svg: 'https://flagcdn.com/cg.svg',
			alt: 'The flag of the Republic of the Congo features a yellow diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. Above and beneath this band are a green and red triangle respectively.'
		},
		name: {
			common: 'Republic of the Congo',
			official: 'Republic of the Congo',
			nativeName: {
				fra: {
					official: 'République du Congo',
					common: 'République du Congo'
				},
				kon: {
					official: 'Repubilika ya Kongo',
					common: 'Repubilika ya Kongo'
				},
				lin: {
					official: 'Republíki ya Kongó',
					common: 'Republíki ya Kongó'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['42']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ve.png',
			svg: 'https://flagcdn.com/ve.svg',
			alt: 'The flag of Venezuela is composed of three equal horizontal bands of yellow, blue and red. At the center of the blue band are eight five-pointed white stars arranged in a horizontal arc.'
		},
		name: {
			common: 'Venezuela',
			official: 'Bolivarian Republic of Venezuela',
			nativeName: {
				spa: {
					official: 'República Bolivariana de Venezuela',
					common: 'Venezuela'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['8']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/pa.png',
			svg: 'https://flagcdn.com/pa.svg',
			alt: 'The flag of Panama is composed of four equal rectangular areas — a white rectangular area with a blue five-pointed star at its center, a red rectangular area, a white rectangular area with a red five-pointed star at its center, and a blue rectangular area — in the upper hoist side, upper fly side, lower fly side and lower hoist side respectively.'
		},
		name: {
			common: 'Panama',
			official: 'Republic of Panama',
			nativeName: {
				spa: {
					official: 'República de Panamá',
					common: 'Panamá'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['07']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/nl.png',
			svg: 'https://flagcdn.com/nl.svg',
			alt: 'The flag of the Netherlands is composed of three equal horizontal bands of red, white and blue.'
		},
		name: {
			common: 'Netherlands',
			official: 'Kingdom of the Netherlands',
			nativeName: {
				nld: {
					official: 'Koninkrijk der Nederlanden',
					common: 'Nederland'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['1']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ws.png',
			svg: 'https://flagcdn.com/ws.svg',
			alt: 'The flag of Samoa has a red field. A blue rectangle, bearing a representation of the Southern Cross made up of five large and one smaller five-pointed white stars, is superimposed in the canton.'
		},
		name: {
			common: 'Samoa',
			official: 'Independent State of Samoa',
			nativeName: {
				eng: {
					official: 'Independent State of Samoa',
					common: 'Samoa'
				},
				smo: {
					official: 'Malo Saʻoloto Tutoʻatasi o Sāmoa',
					common: 'Sāmoa'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['85']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/dk.png',
			svg: 'https://flagcdn.com/dk.svg',
			alt: 'The flag of Denmark has a red field with a large white cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side.'
		},
		name: {
			common: 'Denmark',
			official: 'Kingdom of Denmark',
			nativeName: {
				dan: {
					official: 'Kongeriget Danmark',
					common: 'Danmark'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['5']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/lu.png',
			svg: 'https://flagcdn.com/lu.svg',
			alt: 'The flag of Luxembourg is composed of three equal horizontal bands of red, white and light blue.'
		},
		name: {
			common: 'Luxembourg',
			official: 'Grand Duchy of Luxembourg',
			nativeName: {
				deu: {
					official: 'Großherzogtum Luxemburg',
					common: 'Luxemburg'
				},
				fra: {
					official: 'Grand-Duché de Luxembourg',
					common: 'Luxembourg'
				},
				ltz: {
					official: 'Groussherzogtum Lëtzebuerg',
					common: 'Lëtzebuerg'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['52']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/fo.png',
			svg: 'https://flagcdn.com/fo.svg',
			alt: ''
		},
		name: {
			common: 'Faroe Islands',
			official: 'Faroe Islands',
			nativeName: {
				dan: {
					official: 'Færøerne',
					common: 'Færøerne'
				},
				fao: {
					official: 'Føroyar',
					common: 'Føroyar'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['98']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/si.png',
			svg: 'https://flagcdn.com/si.svg',
			alt: 'The flag of Slovenia is composed of three equal horizontal bands of white, blue and red. The national coat of arms is situated in the upper hoist side of the field centered on the boundary between the white and blue bands.'
		},
		name: {
			common: 'Slovenia',
			official: 'Republic of Slovenia',
			nativeName: {
				slv: {
					official: 'Republika Slovenija',
					common: 'Slovenija'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['86']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/tg.png',
			svg: 'https://flagcdn.com/tg.svg',
			alt: 'The flag of Togo is composed of five equal horizontal bands of green alternating with yellow. A red square bearing a five-pointed white star is superimposed in the canton.'
		},
		name: {
			common: 'Togo',
			official: 'Togolese Republic',
			nativeName: {
				fra: {
					official: 'République togolaise',
					common: 'Togo'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['28']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/th.png',
			svg: 'https://flagcdn.com/th.svg',
			alt: 'The flag of Thailand is composed of five horizontal bands of red, white, blue, white and red, with the central blue band twice the height of the other four bands.'
		},
		name: {
			common: 'Thailand',
			official: 'Kingdom of Thailand',
			nativeName: {
				tha: {
					official: 'ราชอาณาจักรไทย',
					common: 'ประเทศไทย'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['6']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/wf.png',
			svg: 'https://flagcdn.com/wf.svg',
			alt: ''
		},
		name: {
			common: 'Wallis and Futuna',
			official: 'Territory of the Wallis and Futuna Islands',
			nativeName: {
				fra: {
					official: 'Territoire des îles Wallis et Futuna',
					common: 'Wallis et Futuna'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['81']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bs.png',
			svg: 'https://flagcdn.com/bs.svg',
			alt: 'The flag of the Bahamas is composed of three equal horizontal bands of aquamarine, yellow and aquamarine, with a black equilateral triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end and spans about one-third the width of the field.'
		},
		name: {
			common: 'Bahamas',
			official: 'Commonwealth of the Bahamas',
			nativeName: {
				eng: {
					official: 'Commonwealth of the Bahamas',
					common: 'Bahamas'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['242']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/to.png',
			svg: 'https://flagcdn.com/to.svg',
			alt: 'The flag of Tonga has a red field. A white rectangle bearing a red Greek cross is superimposed in the canton.'
		},
		name: {
			common: 'Tonga',
			official: 'Kingdom of Tonga',
			nativeName: {
				eng: {
					official: 'Kingdom of Tonga',
					common: 'Tonga'
				},
				ton: {
					official: 'Kingdom of Tonga',
					common: 'Tonga'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['76']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gr.png',
			svg: 'https://flagcdn.com/gr.svg',
			alt: 'The flag of Greece is composed of nine equal horizontal bands of blue alternating with white. A blue square bearing a white cross is superimposed in the canton.'
		},
		name: {
			common: 'Greece',
			official: 'Hellenic Republic',
			nativeName: {
				ell: {
					official: 'Ελληνική Δημοκρατία',
					common: 'Ελλάδα'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['0']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sm.png',
			svg: 'https://flagcdn.com/sm.svg',
			alt: 'The flag of San Marino is composed of two equal horizontal bands of white and light blue, with the national coat of arms superimposed in the center.'
		},
		name: {
			common: 'San Marino',
			official: 'Republic of San Marino',
			nativeName: {
				ita: {
					official: 'Repubblica di San Marino',
					common: 'San Marino'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['78']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/re.png',
			svg: 'https://flagcdn.com/re.svg',
			alt: ''
		},
		name: {
			common: 'Réunion',
			official: 'Réunion Island',
			nativeName: {
				fra: {
					official: 'Ile de la Réunion',
					common: 'La Réunion'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['62']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/va.png',
			svg: 'https://flagcdn.com/va.svg',
			alt: 'The flag of Vatican City is square shaped. It is composed of two equal vertical bands of yellow and white, with national coat of arms centered in the white band. The national coat of arms comprises the Papal Tiara superimposed on two crossed keys.'
		},
		name: {
			common: 'Vatican City',
			official: 'Vatican City State',
			nativeName: {
				ita: {
					official: 'Stato della Città del Vaticano',
					common: 'Vaticano'
				},
				lat: {
					official: 'Status Civitatis Vaticanæ',
					common: 'Vaticanæ'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['906698', '79']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bi.png',
			svg: 'https://flagcdn.com/bi.svg',
			alt: 'The flag of Burundi is divided by a white diagonal cross into four alternating triangular areas of red at the top and bottom, and green on the hoist and fly sides. A white circle, with three green-edged red six-pointed stars arranged to form a triangle, is superimposed at the center of the cross.'
		},
		name: {
			common: 'Burundi',
			official: 'Republic of Burundi',
			nativeName: {
				fra: {
					official: 'République du Burundi',
					common: 'Burundi'
				},
				run: {
					official: "Republika y'Uburundi ",
					common: 'Uburundi'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['57']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bh.png',
			svg: 'https://flagcdn.com/bh.svg',
			alt: 'The flag of Bahrain has a red field. On the hoist side, it features a white vertical band that spans about one-third the width of the field and is separated from the rest of the field by five adjoining fly-side pointing white isosceles triangles that serve as a serrated line.'
		},
		name: {
			common: 'Bahrain',
			official: 'Kingdom of Bahrain',
			nativeName: {
				ara: {
					official: 'مملكة البحرين',
					common: '‏البحرين'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['73']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mh.png',
			svg: 'https://flagcdn.com/mh.svg',
			alt: 'The flag of Marshall Islands has a blue field with two broadening adjacent diagonal bands of orange and white that extend from the lower hoist-side corner to the upper fly-side corner of the field. A large white star with twenty-four rays — four large rays at the cardinal points and twenty smaller rays — is situated in the upper hoist-side corner above the diagonal bands.'
		},
		name: {
			common: 'Marshall Islands',
			official: 'Republic of the Marshall Islands',
			nativeName: {
				eng: {
					official: 'Republic of the Marshall Islands',
					common: 'Marshall Islands'
				},
				mah: {
					official: 'Republic of the Marshall Islands',
					common: 'M̧ajeļ'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['92']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/tc.png',
			svg: 'https://flagcdn.com/tc.svg',
			alt: ''
		},
		name: {
			common: 'Turks and Caicos Islands',
			official: 'Turks and Caicos Islands',
			nativeName: {
				eng: {
					official: 'Turks and Caicos Islands',
					common: 'Turks and Caicos Islands'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['649']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/im.png',
			svg: 'https://flagcdn.com/im.svg',
			alt: ''
		},
		name: {
			common: 'Isle of Man',
			official: 'Isle of Man',
			nativeName: {
				eng: {
					official: 'Isle of Man',
					common: 'Isle of Man'
				},
				glv: {
					official: 'Ellan Vannin or Mannin',
					common: 'Mannin'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['4']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ht.png',
			svg: 'https://flagcdn.com/ht.svg',
			alt: 'The flag of Haiti is composed of two equal horizontal bands of blue and red. A white square bearing the national coat of arms is superimposed at the center of the field.'
		},
		name: {
			common: 'Haiti',
			official: 'Republic of Haiti',
			nativeName: {
				fra: {
					official: "République d'Haïti",
					common: 'Haïti'
				},
				hat: {
					official: 'Repiblik Ayiti',
					common: 'Ayiti'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['09']
		}
	},
	{
		flags: {
			png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
			svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
			alt: 'The flag of the Islamic Emirate of Afghanistan has a white field with Arabic inscriptions — the Shahada — in black across its center.'
		},
		name: {
			common: 'Afghanistan',
			official: 'Islamic Republic of Afghanistan',
			nativeName: {
				prs: {
					official: 'جمهوری اسلامی افغانستان',
					common: 'افغانستان'
				},
				pus: {
					official: 'د افغانستان اسلامي جمهوریت',
					common: 'افغانستان'
				},
				tuk: {
					official: 'Owganystan Yslam Respublikasy',
					common: 'Owganystan'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['3']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/il.png',
			svg: 'https://flagcdn.com/il.svg',
			alt: 'The flag of Israel has a white field with a blue hexagram — the Magen David — centered between two equal horizontal blue bands situated near the top and bottom edges of the field.'
		},
		name: {
			common: 'Israel',
			official: 'State of Israel',
			nativeName: {
				ara: {
					official: 'دولة إسرائيل',
					common: 'إسرائيل'
				},
				heb: {
					official: 'מדינת ישראל',
					common: 'ישראל'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['72']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ly.png',
			svg: 'https://flagcdn.com/ly.svg',
			alt: 'The flag of Libya is composed of three horizontal bands of red, black and green, with the black band twice the height of the other two bands. At the center of the black band is a fly-side facing white crescent and a five-pointed white star placed just outside the crescent opening.'
		},
		name: {
			common: 'Libya',
			official: 'State of Libya',
			nativeName: {
				ara: {
					official: 'الدولة ليبيا',
					common: '‏ليبيا'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['18']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/uy.png',
			svg: 'https://flagcdn.com/uy.svg',
			alt: "The flag of Uruguay is composed of nine equal horizontal bands of white alternating with blue, with a white square superimposed in the canton. In the white square is a yellow sun bearing a human face — the Sun of May — from which sixteen rays extend. The sun's rays alternate between triangular and wavy."
		},
		name: {
			common: 'Uruguay',
			official: 'Oriental Republic of Uruguay',
			nativeName: {
				spa: {
					official: 'República Oriental del Uruguay',
					common: 'Uruguay'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['98']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/nf.png',
			svg: 'https://flagcdn.com/nf.svg',
			alt: ''
		},
		name: {
			common: 'Norfolk Island',
			official: 'Territory of Norfolk Island',
			nativeName: {
				eng: {
					official: 'Territory of Norfolk Island',
					common: 'Norfolk Island'
				},
				pih: {
					official: "Teratri of Norf'k Ailen",
					common: "Norf'k Ailen"
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['72']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ni.png',
			svg: 'https://flagcdn.com/ni.svg',
			alt: 'The flag of Nicaragua is composed of three equal horizontal bands of blue, white and blue, with the national coat of arms centered in the white band.'
		},
		name: {
			common: 'Nicaragua',
			official: 'Republic of Nicaragua',
			nativeName: {
				spa: {
					official: 'República de Nicaragua',
					common: 'Nicaragua'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['05']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ck.png',
			svg: 'https://flagcdn.com/ck.svg',
			alt: ''
		},
		name: {
			common: 'Cook Islands',
			official: 'Cook Islands',
			nativeName: {
				eng: {
					official: 'Cook Islands',
					common: 'Cook Islands'
				},
				rar: {
					official: "Kūki 'Āirani",
					common: "Kūki 'Āirani"
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['82']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/la.png',
			svg: 'https://flagcdn.com/la.svg',
			alt: 'The flag of Laos is composed of three horizontal bands of red, blue and red. The blue band is twice the height of the red bands and bears a white circle at its center.'
		},
		name: {
			common: 'Laos',
			official: "Lao People's Democratic Republic",
			nativeName: {
				lao: {
					official: 'ສາທາລະນະ ຊາທິປະໄຕ ຄົນລາວ ຂອງ',
					common: 'ສປປລາວ'
				}
			}
		},
		idd: {
			root: '+8',
			suffixes: ['56']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cx.png',
			svg: 'https://flagcdn.com/cx.svg',
			alt: ''
		},
		name: {
			common: 'Christmas Island',
			official: 'Territory of Christmas Island',
			nativeName: {
				eng: {
					official: 'Territory of Christmas Island',
					common: 'Christmas Island'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['1']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sh.png',
			svg: 'https://flagcdn.com/sh.svg',
			alt: ''
		},
		name: {
			common: 'Saint Helena, Ascension and Tristan da Cunha',
			official: 'Saint Helena, Ascension and Tristan da Cunha',
			nativeName: {
				eng: {
					official: 'Saint Helena, Ascension and Tristan da Cunha',
					common: 'Saint Helena, Ascension and Tristan da Cunha'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['90', '47']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ai.png',
			svg: 'https://flagcdn.com/ai.svg',
			alt: ''
		},
		name: {
			common: 'Anguilla',
			official: 'Anguilla',
			nativeName: {
				eng: {
					official: 'Anguilla',
					common: 'Anguilla'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['264']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/fm.png',
			svg: 'https://flagcdn.com/fm.svg',
			alt: 'The flag of Micronesia has a light blue field, at the center of which are four five-pointed white stars arranged in the shape of a diamond.'
		},
		name: {
			common: 'Micronesia',
			official: 'Federated States of Micronesia',
			nativeName: {
				eng: {
					official: 'Federated States of Micronesia',
					common: 'Micronesia'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['91']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/de.png',
			svg: 'https://flagcdn.com/de.svg',
			alt: 'The flag of Germany is composed of three equal horizontal bands of black, red and gold.'
		},
		name: {
			common: 'Germany',
			official: 'Federal Republic of Germany',
			nativeName: {
				deu: {
					official: 'Bundesrepublik Deutschland',
					common: 'Deutschland'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['9']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gu.png',
			svg: 'https://flagcdn.com/gu.svg',
			alt: ''
		},
		name: {
			common: 'Guam',
			official: 'Guam',
			nativeName: {
				cha: {
					official: 'Guåhån',
					common: 'Guåhån'
				},
				eng: {
					official: 'Guam',
					common: 'Guam'
				},
				spa: {
					official: 'Guam',
					common: 'Guam'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['671']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ki.png',
			svg: 'https://flagcdn.com/ki.svg',
			alt: 'The flag of Kiribati is divided into two halves. While the upper half has a red field, at the center of which is a yellow frigate bird flying over the top half of a rising yellow sun with seventeen visible rays, the lower half is composed of six horizontal wavy bands of white alternating with blue to depict the ocean.'
		},
		name: {
			common: 'Kiribati',
			official: 'Independent and Sovereign Republic of Kiribati',
			nativeName: {
				eng: {
					official: 'Independent and Sovereign Republic of Kiribati',
					common: 'Kiribati'
				},
				gil: {
					official: 'Ribaberiki Kiribati',
					common: 'Kiribati'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['86']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sx.png',
			svg: 'https://flagcdn.com/sx.svg',
			alt: ''
		},
		name: {
			common: 'Sint Maarten',
			official: 'Sint Maarten',
			nativeName: {
				eng: {
					official: 'Sint Maarten',
					common: 'Sint Maarten'
				},
				fra: {
					official: 'Saint-Martin',
					common: 'Saint-Martin'
				},
				nld: {
					official: 'Sint Maarten',
					common: 'Sint Maarten'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['721']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/es.png',
			svg: 'https://flagcdn.com/es.svg',
			alt: 'The flag of Spain is composed of three horizontal bands of red, yellow and red, with the yellow band twice the height of the red bands. In the yellow band is the national coat of arms offset slightly towards the hoist side of center.'
		},
		name: {
			common: 'Spain',
			official: 'Kingdom of Spain',
			nativeName: {
				spa: {
					official: 'Reino de España',
					common: 'España'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['4']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/jm.png',
			svg: 'https://flagcdn.com/jm.svg',
			alt: 'The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides'
		},
		name: {
			common: 'Jamaica',
			official: 'Jamaica',
			nativeName: {
				eng: {
					official: 'Jamaica',
					common: 'Jamaica'
				},
				jam: {
					official: 'Jamaica',
					common: 'Jamaica'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['876']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ps.png',
			svg: 'https://flagcdn.com/ps.svg',
			alt: ''
		},
		name: {
			common: 'Palestine',
			official: 'State of Palestine',
			nativeName: {
				ara: {
					official: 'دولة فلسطين',
					common: 'فلسطين'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['70']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gf.png',
			svg: 'https://flagcdn.com/gf.svg',
			alt: ''
		},
		name: {
			common: 'French Guiana',
			official: 'Guiana',
			nativeName: {
				fra: {
					official: 'Guyane',
					common: 'Guyane française'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['94']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ad.png',
			svg: 'https://flagcdn.com/ad.svg',
			alt: 'The flag of Andorra features three equal vertical bands of blue, yellow and red, with the coat of arms of Andorra centered in the yellow band.'
		},
		name: {
			common: 'Andorra',
			official: 'Principality of Andorra',
			nativeName: {
				cat: {
					official: "Principat d'Andorra",
					common: 'Andorra'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['76']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cl.png',
			svg: 'https://flagcdn.com/cl.svg',
			alt: 'The flag of Chile is composed of two equal horizontal bands of white and red, with a blue square of the same height as the white band superimposed in the canton. A white five-pointed star is centered in the blue square.'
		},
		name: {
			common: 'Chile',
			official: 'Republic of Chile',
			nativeName: {
				spa: {
					official: 'República de Chile',
					common: 'Chile'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['6']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ls.png',
			svg: 'https://flagcdn.com/ls.svg',
			alt: 'The flag of Lesotho is composed of three horizontal bands of blue, white and green in the ratio of 3:4:3. A black mokorotlo — a Basotho hat — is centered in the white band.'
		},
		name: {
			common: 'Lesotho',
			official: 'Kingdom of Lesotho',
			nativeName: {
				eng: {
					official: 'Kingdom of Lesotho',
					common: 'Lesotho'
				},
				sot: {
					official: 'Kingdom of Lesotho',
					common: 'Lesotho'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['66']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/au.png',
			svg: 'https://flagcdn.com/au.svg',
			alt: 'The flag of Australia has a dark blue field. It features the flag of the United Kingdom — the Union Jack — in the canton, beneath which is a large white seven-pointed star. A representation of the Southern Cross constellation, made up of one small five-pointed and four larger seven-pointed white stars, is situated on the fly side of the field.'
		},
		name: {
			common: 'Australia',
			official: 'Commonwealth of Australia',
			nativeName: {
				eng: {
					official: 'Commonwealth of Australia',
					common: 'Australia'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['1']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gd.png',
			svg: 'https://flagcdn.com/gd.svg',
			alt: 'The flag of Grenada features a large central rectangular area surrounded by a red border, with three five-pointed yellow stars centered on the top and bottom borders. The central rectangle is divided diagonally into four alternating triangular areas of yellow at the top and bottom and green on the hoist and fly sides, and a five-pointed yellow star on a red circle is superimposed at its center. A symbolic nutmeg pod is situated on the green hoist-side triangle.'
		},
		name: {
			common: 'Grenada',
			official: 'Grenada',
			nativeName: {
				eng: {
					official: 'Grenada',
					common: 'Grenada'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['473']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gh.png',
			svg: 'https://flagcdn.com/gh.svg',
			alt: 'The flag of Ghana is composed of three equal horizontal bands of red, gold and green, with a five-pointed black star centered in the gold band.'
		},
		name: {
			common: 'Ghana',
			official: 'Republic of Ghana',
			nativeName: {
				eng: {
					official: 'Republic of Ghana',
					common: 'Ghana'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['33']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sc.png',
			svg: 'https://flagcdn.com/sc.svg',
			alt: 'The flag of Seychelles is composed of five broadening oblique bands of blue, yellow, red, white and green, which extend from the hoist side of the bottom edge to the top and fly edges of the field.'
		},
		name: {
			common: 'Seychelles',
			official: 'Republic of Seychelles',
			nativeName: {
				crs: {
					official: 'Repiblik Sesel',
					common: 'Sesel'
				},
				eng: {
					official: 'Republic of Seychelles',
					common: 'Seychelles'
				},
				fra: {
					official: 'République des Seychelles',
					common: 'Seychelles'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['48']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ao.png',
			svg: 'https://flagcdn.com/ao.svg',
			alt: 'The flag of Angola features two equal horizontal bands of red and black, with a yellow emblem at its centre. This emblem consists of a five-pointed star within the hoist-side facing half of a cogwheel that is crossed on its lower end by a machete.'
		},
		name: {
			common: 'Angola',
			official: 'Republic of Angola',
			nativeName: {
				por: {
					official: 'República de Angola',
					common: 'Angola'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['44']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bm.png',
			svg: 'https://flagcdn.com/bm.svg',
			alt: ''
		},
		name: {
			common: 'Bermuda',
			official: 'Bermuda',
			nativeName: {
				eng: {
					official: 'Bermuda',
					common: 'Bermuda'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['441']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/pk.png',
			svg: 'https://flagcdn.com/pk.svg',
			alt: 'The flag of Pakistan is composed of a white vertical band on its hoist side that takes up about one-fourth the width of the field and a dark green rectangular area that spans the rest of the field. A white fly-side facing crescent and five-pointed star are centered in the dark green area.'
		},
		name: {
			common: 'Pakistan',
			official: 'Islamic Republic of Pakistan',
			nativeName: {
				eng: {
					official: 'Islamic Republic of Pakistan',
					common: 'Pakistan'
				},
				urd: {
					official: 'اسلامی جمہوریۂ پاكستان',
					common: 'پاكستان'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['2']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ml.png',
			svg: 'https://flagcdn.com/ml.svg',
			alt: 'The flag of Mali is composed of three equal vertical bands of green, yellow and red.'
		},
		name: {
			common: 'Mali',
			official: 'Republic of Mali',
			nativeName: {
				fra: {
					official: 'République du Mali',
					common: 'Mali'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['23']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sa.png',
			svg: 'https://flagcdn.com/sa.svg',
			alt: 'The flag of Saudi Arabia has a green field, at the center of which is an Arabic inscription — the Shahada — in white above a white horizontal sabre with its tip pointed to the hoist side of the field.'
		},
		name: {
			common: 'Saudi Arabia',
			official: 'Kingdom of Saudi Arabia',
			nativeName: {
				ara: {
					official: 'المملكة العربية السعودية',
					common: 'العربية السعودية'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['66']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cw.png',
			svg: 'https://flagcdn.com/cw.svg',
			alt: ''
		},
		name: {
			common: 'Curaçao',
			official: 'Country of Curaçao',
			nativeName: {
				eng: {
					official: 'Country of Curaçao',
					common: 'Curaçao'
				},
				nld: {
					official: 'Land Curaçao',
					common: 'Curaçao'
				},
				pap: {
					official: 'Pais Kòrsou',
					common: 'Pais Kòrsou'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['99']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/kr.png',
			svg: 'https://flagcdn.com/kr.svg',
			alt: 'The flag of South Korea has a white field, at the center of which is a red and blue Taegeuk circle surrounded by four black trigrams, one in each corner.'
		},
		name: {
			common: 'South Korea',
			official: 'Republic of Korea',
			nativeName: {
				kor: {
					official: '대한민국',
					common: '한국'
				}
			}
		},
		idd: {
			root: '+8',
			suffixes: ['2']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/et.png',
			svg: 'https://flagcdn.com/et.svg',
			alt: 'The flag of Ethiopia is composed of three equal horizontal bands of green, yellow and red, with the national emblem superimposed at the center of the field. The national emblem comprises a light blue circle bearing a golden-yellow pentagram with single yellow rays emanating from the angles between the points of the pentagram.'
		},
		name: {
			common: 'Ethiopia',
			official: 'Federal Democratic Republic of Ethiopia',
			nativeName: {
				amh: {
					official: 'የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ',
					common: 'ኢትዮጵያ'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['51']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gp.png',
			svg: 'https://flagcdn.com/gp.svg',
			alt: ''
		},
		name: {
			common: 'Guadeloupe',
			official: 'Guadeloupe',
			nativeName: {
				fra: {
					official: 'Guadeloupe',
					common: 'Guadeloupe'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['90']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bd.png',
			svg: 'https://flagcdn.com/bd.svg',
			alt: 'The flag of Bangladesh has a dark green field bearing a large red circle that is offset slightly towards the hoist side of center.'
		},
		name: {
			common: 'Bangladesh',
			official: "People's Republic of Bangladesh",
			nativeName: {
				ben: {
					official: 'বাংলাদেশ গণপ্রজাতন্ত্রী',
					common: 'বাংলাদেশ'
				}
			}
		},
		idd: {
			root: '+8',
			suffixes: ['80']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/nz.png',
			svg: 'https://flagcdn.com/nz.svg',
			alt: 'The flag of New Zealand has a dark blue field with the flag of the United Kingdom — the Union Jack — in the canton and a representation of the Southern Cross constellation, made up of four five-pointed white-edged red stars, on the fly side of the field.'
		},
		name: {
			common: 'New Zealand',
			official: 'New Zealand',
			nativeName: {
				eng: {
					official: 'New Zealand',
					common: 'New Zealand'
				},
				mri: {
					official: 'Aotearoa',
					common: 'Aotearoa'
				},
				nzs: {
					official: 'New Zealand',
					common: 'New Zealand'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['4']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/km.png',
			svg: 'https://flagcdn.com/km.svg',
			alt: 'The flag of Comoros is composed of four equal horizontal bands of yellow, white, red and blue, with a green isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about two-fifth the width of the field and bears a fly-side facing white crescent and four five-pointed white stars arranged in a vertical line along the opening of the crescent.'
		},
		name: {
			common: 'Comoros',
			official: 'Union of the Comoros',
			nativeName: {
				ara: {
					official: 'الاتحاد القمري',
					common: 'القمر‎'
				},
				fra: {
					official: 'Union des Comores',
					common: 'Comores'
				},
				zdj: {
					official: 'Udzima wa Komori',
					common: 'Komori'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['69']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bz.png',
			svg: 'https://flagcdn.com/bz.svg',
			alt: 'The flag of Belize has a royal blue field with a thin red horizontal band at the top and bottom of the field and the national coat of arms in the center.'
		},
		name: {
			common: 'Belize',
			official: 'Belize',
			nativeName: {
				bjz: {
					official: 'Belize',
					common: 'Belize'
				},
				eng: {
					official: 'Belize',
					common: 'Belize'
				},
				spa: {
					official: 'Belice',
					common: 'Belice'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['01']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ug.png',
			svg: 'https://flagcdn.com/ug.svg',
			alt: 'The flag of Uganda is composed of six equal horizontal bands of black, yellow, red, black, yellow and red. A white circle bearing a hoist-side facing grey red-crested crane is superimposed in the center of the field.'
		},
		name: {
			common: 'Uganda',
			official: 'Republic of Uganda',
			nativeName: {
				eng: {
					official: 'Republic of Uganda',
					common: 'Uganda'
				},
				swa: {
					official: 'Republic of Uganda',
					common: 'Uganda'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['56']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sg.png',
			svg: 'https://flagcdn.com/sg.svg',
			alt: 'The flag of Singapore is composed of two equal horizontal bands of red and white. On the hoist side of the red band is a fly-side facing white crescent which partially encloses five small five-pointed white stars arranged in the shape of a pentagon.'
		},
		name: {
			common: 'Singapore',
			official: 'Republic of Singapore',
			nativeName: {
				eng: {
					official: 'Republic of Singapore',
					common: 'Singapore'
				},
				zho: {
					official: '新加坡共和国',
					common: '新加坡'
				},
				msa: {
					official: 'Republik Singapura',
					common: 'Singapura'
				},
				tam: {
					official: 'சிங்கப்பூர் குடியரசு',
					common: 'சிங்கப்பூர்'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['5']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/li.png',
			svg: 'https://flagcdn.com/li.svg',
			alt: 'The flag of Liechtenstein is composed of two equal horizontal bands of blue and red, with a golden-yellow crown on the hoist side of the blue band.'
		},
		name: {
			common: 'Liechtenstein',
			official: 'Principality of Liechtenstein',
			nativeName: {
				deu: {
					official: 'Fürstentum Liechtenstein',
					common: 'Liechtenstein'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['23']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/hu.png',
			svg: 'https://flagcdn.com/hu.svg',
			alt: 'The flag of Hungary is composed of three equal horizontal bands of red, white and green.'
		},
		name: {
			common: 'Hungary',
			official: 'Hungary',
			nativeName: {
				hun: {
					official: 'Magyarország',
					common: 'Magyarország'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['6']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/is.png',
			svg: 'https://flagcdn.com/is.svg',
			alt: 'The flag of Iceland has a blue field with a large white-edged red cross that extends to the edges of the field. The vertical part of this cross is offset towards the hoist side.'
		},
		name: {
			common: 'Iceland',
			official: 'Iceland',
			nativeName: {
				isl: {
					official: 'Ísland',
					common: 'Ísland'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['54']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/tj.png',
			svg: 'https://flagcdn.com/tj.svg',
			alt: 'The flag of Tajikistan is composed of three horizontal bands of red, white and green in the ratio of 2:3:2. A golden-yellow crown surmounted by an arc of seven five-pointed golden-yellow stars is centered in the white band.'
		},
		name: {
			common: 'Tajikistan',
			official: 'Republic of Tajikistan',
			nativeName: {
				rus: {
					official: 'Республика Таджикистан',
					common: 'Таджикистан'
				},
				tgk: {
					official: 'Ҷумҳурии Тоҷикистон',
					common: 'Тоҷикистон'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['92']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/na.png',
			svg: 'https://flagcdn.com/na.svg',
			alt: 'The flag of Namibia features a white-edged red diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. Above and beneath this band are a blue and green triangle respectively. A gold sun with twelve triangular rays is situated on the hoist side of the upper triangle.'
		},
		name: {
			common: 'Namibia',
			official: 'Republic of Namibia',
			nativeName: {
				afr: {
					official: 'Republiek van Namibië',
					common: 'Namibië'
				},
				deu: {
					official: 'Republik Namibia',
					common: 'Namibia'
				},
				eng: {
					official: 'Republic of Namibia',
					common: 'Namibia'
				},
				her: {
					official: 'Republic of Namibia',
					common: 'Namibia'
				},
				hgm: {
					official: 'Republic of Namibia',
					common: 'Namibia'
				},
				kwn: {
					official: 'Republic of Namibia',
					common: 'Namibia'
				},
				loz: {
					official: 'Republic of Namibia',
					common: 'Namibia'
				},
				ndo: {
					official: 'Republic of Namibia',
					common: 'Namibia'
				},
				tsn: {
					official: 'Lefatshe la Namibia',
					common: 'Namibia'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['64']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/tl.png',
			svg: 'https://flagcdn.com/tl.svg',
			alt: 'The flag of Timor-Leste has a red field with two isosceles triangles which share a common base on the hoist end. The smaller black triangle, which bears a five-pointed white star at its center and spans one-third the width of the field, is superimposed on the larger yellow triangle that extends to the center of the field.'
		},
		name: {
			common: 'Timor-Leste',
			official: 'Democratic Republic of Timor-Leste',
			nativeName: {
				por: {
					official: 'República Democrática de Timor-Leste',
					common: 'Timor-Leste'
				},
				tet: {
					official: 'Repúblika Demokrátika Timór-Leste',
					common: 'Timór-Leste'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['70']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/eg.png',
			svg: 'https://flagcdn.com/eg.svg',
			alt: "The flag of Egypt is composed of three equal horizontal bands of red, white and black, with Egypt's national emblem — a hoist-side facing gold eagle of Saladin — centered in the white band."
		},
		name: {
			common: 'Egypt',
			official: 'Arab Republic of Egypt',
			nativeName: {
				ara: {
					official: 'جمهورية مصر العربية',
					common: 'مصر'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['0']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/rs.png',
			svg: 'https://flagcdn.com/rs.svg',
			alt: 'The flag of Serbia is composed of three equal horizontal bands of red, blue and white. The coat of arms of Serbia is superimposed at the center of the field slightly towards the hoist side.'
		},
		name: {
			common: 'Serbia',
			official: 'Republic of Serbia',
			nativeName: {
				srp: {
					official: 'Република Србија',
					common: 'Србија'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['81']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mu.png',
			svg: 'https://flagcdn.com/mu.svg',
			alt: 'The flag of Mauritius is composed of four equal horizontal bands of red, blue, yellow and green.'
		},
		name: {
			common: 'Mauritius',
			official: 'Republic of Mauritius',
			nativeName: {
				eng: {
					official: 'Republic of Mauritius',
					common: 'Mauritius'
				},
				fra: {
					official: 'République de Maurice',
					common: 'Maurice'
				},
				mfe: {
					official: 'Republik Moris',
					common: 'Moris'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['30']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mo.png',
			svg: 'https://flagcdn.com/mo.svg',
			alt: ''
		},
		name: {
			common: 'Macau',
			official: "Macao Special Administrative Region of the People's Republic of China",
			nativeName: {
				por: {
					official: 'Região Administrativa Especial de Macau da República Popular da China',
					common: 'Macau'
				},
				zho: {
					official: '中华人民共和国澳门特别行政区',
					common: '澳门'
				}
			}
		},
		idd: {
			root: '+8',
			suffixes: ['53']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/pf.png',
			svg: 'https://flagcdn.com/pf.svg',
			alt: ''
		},
		name: {
			common: 'French Polynesia',
			official: 'French Polynesia',
			nativeName: {
				fra: {
					official: 'Polynésie française',
					common: 'Polynésie française'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['89']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mv.png',
			svg: 'https://flagcdn.com/mv.svg',
			alt: 'The flag of Maldives has a red field, at the center of which is a large green rectangle bearing a fly-side facing white crescent.'
		},
		name: {
			common: 'Maldives',
			official: 'Republic of the Maldives',
			nativeName: {
				div: {
					official: 'ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ',
					common: 'ދިވެހިރާއްޖޭގެ'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['60']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/id.png',
			svg: 'https://flagcdn.com/id.svg',
			alt: 'The flag of Indonesia is composed of two equal horizontal bands of red and white.'
		},
		name: {
			common: 'Indonesia',
			official: 'Republic of Indonesia',
			nativeName: {
				ind: {
					official: 'Republik Indonesia',
					common: 'Indonesia'
				}
			}
		},
		idd: {
			root: '+6',
			suffixes: ['2']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/cd.png',
			svg: 'https://flagcdn.com/cd.svg',
			alt: 'The flag of the Democratic Republic of the Congo has a sky-blue field with a yellow-edged red diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. A large five-pointed yellow star is situated above the diagonal band on the upper hoist side of the field.'
		},
		name: {
			common: 'DR Congo',
			official: 'Democratic Republic of the Congo',
			nativeName: {
				fra: {
					official: 'République démocratique du Congo',
					common: 'RD Congo'
				},
				kon: {
					official: 'Repubilika ya Kongo Demokratiki',
					common: 'Repubilika ya Kongo Demokratiki'
				},
				lin: {
					official: 'Republiki ya Kongó Demokratiki',
					common: 'Republiki ya Kongó Demokratiki'
				},
				lua: {
					official: 'Ditunga dia Kongu wa Mungalaata',
					common: 'Ditunga dia Kongu wa Mungalaata'
				},
				swa: {
					official: 'Jamhuri ya Kidemokrasia ya Kongo',
					common: 'Jamhuri ya Kidemokrasia ya Kongo'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['43']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ee.png',
			svg: 'https://flagcdn.com/ee.svg',
			alt: 'The flag of Estonia is composed of three equal horizontal bands of blue, black and white.'
		},
		name: {
			common: 'Estonia',
			official: 'Republic of Estonia',
			nativeName: {
				est: {
					official: 'Eesti Vabariik',
					common: 'Eesti'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['72']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/vn.png',
			svg: 'https://flagcdn.com/vn.svg',
			alt: 'The flag of Vietnam features a large five-pointed yellow star on a red field.'
		},
		name: {
			common: 'Vietnam',
			official: 'Socialist Republic of Vietnam',
			nativeName: {
				vie: {
					official: 'Cộng hòa xã hội chủ nghĩa Việt Nam',
					common: 'Việt Nam'
				}
			}
		},
		idd: {
			root: '+8',
			suffixes: ['4']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/it.png',
			svg: 'https://flagcdn.com/it.svg',
			alt: 'The flag of Italy is composed of three equal vertical bands of green, white and red.'
		},
		name: {
			common: 'Italy',
			official: 'Italian Republic',
			nativeName: {
				ita: {
					official: 'Repubblica italiana',
					common: 'Italia'
				}
			}
		},
		idd: {
			root: '+3',
			suffixes: ['9']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/gn.png',
			svg: 'https://flagcdn.com/gn.svg',
			alt: 'The flag of Guinea is composed of three equal vertical bands of red, yellow and green.'
		},
		name: {
			common: 'Guinea',
			official: 'Republic of Guinea',
			nativeName: {
				fra: {
					official: 'République de Guinée',
					common: 'Guinée'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['24']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/td.png',
			svg: 'https://flagcdn.com/td.svg',
			alt: 'The flag of Chad is composed of three equal vertical bands of blue, gold and red.'
		},
		name: {
			common: 'Chad',
			official: 'Republic of Chad',
			nativeName: {
				ara: {
					official: 'جمهورية تشاد',
					common: 'تشاد‎'
				},
				fra: {
					official: 'République du Tchad',
					common: 'Tchad'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['35']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ec.png',
			svg: 'https://flagcdn.com/ec.svg',
			alt: 'The flag of Ecuador is composed of the horizontal bands of yellow, blue and red, with the yellow band twice the height of the other two bands. The Ecuadorian coat of arms is superimposed in the center of the field.'
		},
		name: {
			common: 'Ecuador',
			official: 'Republic of Ecuador',
			nativeName: {
				spa: {
					official: 'República del Ecuador',
					common: 'Ecuador'
				}
			}
		},
		idd: {
			root: '+5',
			suffixes: ['93']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ge.png',
			svg: 'https://flagcdn.com/ge.svg',
			alt: 'The flag of Georgia has a white field with a large centered red cross that extends to the edges and divides the field into four quarters. A small red Bolnur-Katskhuri cross is centered in each quarter.'
		},
		name: {
			common: 'Georgia',
			official: 'Georgia',
			nativeName: {
				kat: {
					official: 'საქართველო',
					common: 'საქართველო'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['95']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/mw.png',
			svg: 'https://flagcdn.com/mw.svg',
			alt: 'The flag of Malawi is composed of three equal horizontal bands of black, red and green. The top half of a red sun with thirty-one visible rays is centered in the black band.'
		},
		name: {
			common: 'Malawi',
			official: 'Republic of Malawi',
			nativeName: {
				eng: {
					official: 'Republic of Malawi',
					common: 'Malawi'
				},
				nya: {
					official: 'Chalo cha Malawi, Dziko la Malaŵi',
					common: 'Malaŵi'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['65']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/iq.png',
			svg: 'https://flagcdn.com/iq.svg',
			alt: 'The flag of Iraq is composed of three equal horizontal bands of red, white and black. In the central white band are Arabic inscriptions in green.'
		},
		name: {
			common: 'Iraq',
			official: 'Republic of Iraq',
			nativeName: {
				ara: {
					official: 'جمهورية العراق',
					common: 'العراق'
				},
				arc: {
					official: 'ܩܘܼܛܢܵܐ ܐܝܼܪܲܩ',
					common: 'ܩܘܼܛܢܵܐ'
				},
				ckb: {
					official: 'کۆماری عێراق',
					common: 'کۆماری'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['64']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/sj.png',
			svg: 'https://flagcdn.com/sj.svg',
			alt: ''
		},
		name: {
			common: 'Svalbard and Jan Mayen',
			official: 'Svalbard og Jan Mayen',
			nativeName: {
				nor: {
					official: 'Svalbard og Jan Mayen',
					common: 'Svalbard og Jan Mayen'
				}
			}
		},
		idd: {
			root: '+4',
			suffixes: ['779']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/bj.png',
			svg: 'https://flagcdn.com/bj.svg',
			alt: 'The flag of Benin features a green vertical band on its hoist side that takes up about two-fifth the width of the field and two equal horizontal bands of yellow and red adjoining the vertical band.'
		},
		name: {
			common: 'Benin',
			official: 'Republic of Benin',
			nativeName: {
				fra: {
					official: 'République du Bénin',
					common: 'Bénin'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['29']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/jp.png',
			svg: 'https://flagcdn.com/jp.svg',
			alt: 'The flag of Japan features a crimson-red circle at the center of a white field.'
		},
		name: {
			common: 'Japan',
			official: 'Japan',
			nativeName: {
				jpn: {
					official: '日本',
					common: '日本'
				}
			}
		},
		idd: {
			root: '+8',
			suffixes: ['1']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/do.png',
			svg: 'https://flagcdn.com/do.svg',
			alt: 'The flag of the Dominican Republic is divided into four rectangles by a centered white cross that extends to the edges of the field and bears the national coat of arms in its center. The upper hoist-side and lower fly-side rectangles are blue and the lower hoist-side and upper fly-side rectangles are red.'
		},
		name: {
			common: 'Dominican Republic',
			official: 'Dominican Republic',
			nativeName: {
				spa: {
					official: 'República Dominicana',
					common: 'República Dominicana'
				}
			}
		},
		idd: {
			root: '+1',
			suffixes: ['809', '829', '849']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/qa.png',
			svg: 'https://flagcdn.com/qa.svg',
			alt: 'The flag of Qatar has a maroon field, on the hoist side of which is a white vertical band that spans about one-third the width of the field and is separated from the rest of the field by nine adjoining fly-side pointing white isosceles triangles that serve as a serrated line.'
		},
		name: {
			common: 'Qatar',
			official: 'State of Qatar',
			nativeName: {
				ara: {
					official: 'دولة قطر',
					common: 'قطر'
				}
			}
		},
		idd: {
			root: '+9',
			suffixes: ['74']
		}
	},
	{
		flags: {
			png: 'https://flagcdn.com/w320/ga.png',
			svg: 'https://flagcdn.com/ga.svg',
			alt: 'The flag of Gabon is composed of three equal horizontal bands of green, yellow and blue.'
		},
		name: {
			common: 'Gabon',
			official: 'Gabonese Republic',
			nativeName: {
				fra: {
					official: 'République gabonaise',
					common: 'Gabon'
				}
			}
		},
		idd: {
			root: '+2',
			suffixes: ['41']
		}
	}
];

export default countries.map((country) => ({
	name: country.name.common,
	flag: country.flags.svg,
	callCode: parseInt(country.idd.root)
})) satisfies Country[];
