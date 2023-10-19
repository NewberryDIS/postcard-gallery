import { createClient } from '@vercel/kv';
import { KV_REST_API_URL, KV_REST_API_TOKEN } from '$env/static/private';
import { slugify, packageExtractor } from '$lib';

const alldata = {
	APIRequestInfo: {
		ProviderVersion: 'CONCORD.R3.1878K.209872',
		ProviderIdentity: 'NBL-USE2-P-APP',
		ProviderID: '85dca31b7899f944ad0236f5f856af0c',
		Module: 'PackageExtractor',
		APIVersion: 'v1.0',
		Resource: 'Extract',
		IsLoggedIn: true,
		Parameters: {
			Package: '2KXJ8ZSA9MFDO',
			PackageFields:
				'SystemIdentifier,Title,new.Context,CoreField.IIIFResourceType,MediaEncryptedIdentifier,MaxHeight,MaxWidth',
			RepresentativeFields:
				'SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight,CoreField.IIIFResourceType',
			ContentFields:
				'SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType,MaxWidth,MaxHeight,MediaType,CoreField.Representative_Image_RecordID,CoreField.Link',
			token: 'CortexSmcAh@rZw@MdfxUqWyi3TYwpJL@fiR4RWMwShP4Unww*'
		},
		Status: 'LoggedIn',
		UserLogin: 'c2lknt',
		Session: 'No session (production configuration)',
		TimeoutPeriodMinutes: 60
	},
	APIResponse: {
		SystemIdentifier: 'NL11L0NX',
		Title: 'Galleries',
		'new.Context': '',
		'CoreField.IIIFResourceType': 'Manifest',
		MediaEncryptedIdentifier: '2KXJ8ZSA9MFDO',
		MaxHeight: '',
		MaxWidth: '',
		Representative: {
			SystemIdentifier: 'NL13J83',
			MediaEncryptedIdentifier: '2KXJ8Z8ZFFEE',
			Title: 'Bryan L. Bossier postcard collection, 1880s-1920s [000797_01]',
			MaxWidth: '4065',
			MaxHeight: '2720',
			'CoreField.IIIFResourceType': ''
		},
		Content: [
			{
				SystemIdentifier: 'NL11L2E9',
				MediaEncryptedIdentifier: '2KXJ8ZSAKD58D',
				Title: 'Bicycling',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001741949',
				'CoreField.Link': 'C.aspx?VP3=DamView&VBID=2KXJA4PL1YKG&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L2E5',
				MediaEncryptedIdentifier: '2KXJ8ZSAKD6V9',
				Title: 'Chicago',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001586452',
				'CoreField.Link':
					'asset-management?WS=SearchResults#/DamView&VBID=2KXJA4P9UM_O&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L2DQ',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDC09',
				Title: 'Dogs',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000000146975',
				'CoreField.Link':
					'asset-management?WS=SearchResults#/DamView&VBID=2KXJA4P9IX47&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L2DO',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDB98',
				Title: 'Alcohol',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001734929',
				'CoreField.Link':
					'asset-management?WS=SearchResults#/DamView&VBID=2KXJA4P9IQ59&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L2DM',
				MediaEncryptedIdentifier: '2KXJ8ZSAKD0AX',
				Title: 'Reading and Writing',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001732515',
				'CoreField.Link':
					'asset-management?WS=SearchResults#/DamView&VBID=2KXJA4P9SS22&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L2DK',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDPK2',
				Title: 'Newberry',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001992522',
				'CoreField.Link':
					'asset-management?WS=SearchResults#/DamView&VBID=2KXJA4P90PEB&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L2DB',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDMYB',
				Title: 'School Days',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000000728141',
				'CoreField.Link':
					'asset-management?WS=SearchResults#/DamView&VBID=2KXJA4P9P7OB&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L2D9',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDD11',
				Title: 'Cats',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000000796092',
				'CoreField.Link': 'C.aspx?VP3=DamView&VBID=2KXJA4P9QYED&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L2D7',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDRBQ',
				Title: 'Coffee & Tea',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001741848',
				'CoreField.Link': 'C.aspx?VP3=DamView&VBID=2KXJA4P9XCAK&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L0O4',
				MediaEncryptedIdentifier: '2KXJ8ZSA9MW04',
				Title: "Women's Rights",
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000000132132',
				'CoreField.Link': 'C.aspx?VP3=DamView&VBID=2KXJA4P9XBIR&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11XACY',
				MediaEncryptedIdentifier: '2KXJ8ZSMLBWN6',
				Title: 'New Year',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001921764',
				'CoreField.Link': 'C.aspx?VP3=DamView&VBID=2KXJA4P93RHU&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L2DD',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDJCR',
				Title: "Valentine's Day",
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001821193',
				'CoreField.Link':
					'asset-management?WS=SearchResults#/DamView&VBID=2KXJA4P9EA4Q&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11XB58',
				MediaEncryptedIdentifier: '2KXJ8ZSMLW43T',
				Title: "Saint Patrick's Day",
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001819096',
				'CoreField.Link': 'C.aspx?VP3=DamView&VBID=2KXJA4P9178B&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L2DI',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDKDK',
				Title: 'Easter',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001817816',
				'CoreField.Link':
					'asset-management?WS=SearchResults#/DamView&VBID=2KXJA4P924DW&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11XAQ1',
				MediaEncryptedIdentifier: '2KXJ8ZSMLBK0Z',
				Title: 'Fourth of July',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001733703',
				'CoreField.Link': 'C.aspx?VP3=DamView&VBID=2KXJA4P9L1EU&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L2DX',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDX4O',
				Title: 'Halloween',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001818902',
				'CoreField.Link':
					'asset-management?WS=SearchResults#/DamView&VBID=2KXJA4P9B5QX&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L2DZ',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDE3I',
				Title: 'Thanksgiving',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001599897',
				'CoreField.Link': 'C.aspx?VP3=DamView&VBID=2KXJA4P9BU7I&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11L2EB',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDQ5P',
				Title: 'Christmas',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001738568',
				'CoreField.Link': 'C.aspx?VP3=DamView&VBID=2KXJA4P9RW74&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11XAD0',
				MediaEncryptedIdentifier: '2KXJ8ZSMLBTPJ',
				Title: 'Birthdays',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000000800323',
				'CoreField.Link': 'C.aspx?VP3=DamView&VBID=2KXJA4P98QX9&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11XAPZ',
				MediaEncryptedIdentifier: '2KXJ8ZSMLBSQC',
				Title: 'Winter',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001749405',
				'CoreField.Link':
					'asset-management?WS=SearchResults#/DamView&VBID=2KXJA4P9Y7CB&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11XAPR',
				MediaEncryptedIdentifier: '2KXJ8ZSMLB4ST',
				Title: 'Spring',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000000423930',
				'CoreField.Link':
					'asset-management?WS=SearchResults#/DamView&VBID=2KXJA4P9JRFU&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11XAPV',
				MediaEncryptedIdentifier: '2KXJ8ZSMLBXZV',
				Title: 'Summer',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000002159988',
				'CoreField.Link':
					'asset-management?WS=SearchResults#/DamView&VBID=2KXJA4P9AIGX&PN=1&WS=SearchResults'
			},
			{
				SystemIdentifier: 'NL11XAPX',
				MediaEncryptedIdentifier: '2KXJ8ZSMLB0XM',
				Title: 'Autumn',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001741356',
				'CoreField.Link': ''
			}
		],
		useremail: 'c2lkn.t@gmail.com'
	}
};

const meis = alldata.APIResponse.Content.map((c) => slugify(c.Title));

export async function load() {
	const galleryDataClient = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN
	});
	const allltoo = await Promise.all(
		meis.map(async (m) => {
			return await galleryDataClient.get(m);
		})
	);

	const all3 = allltoo.map((al) => {
		const filteredAPIData = alldata.APIResponse.Content.filter(
			(f) => f.MediaEncryptedIdentifier === al.galMEI
		)[0];
		const link = filteredAPIData['CoreField.Link'];
		al.link = link;
		return al;
	});
	// await Promise.all(
	// 	all3.map(async (a3) => {
	// 		await galleryDataClient.set(a3.slug, a3);
	// 	})
	// );
	// return { all3, meis };
	return { hooray: 'you did it!' };
}
