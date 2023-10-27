import { createClient } from '@vercel/kv';
import { KV_REST_API_URL, KV_REST_API_TOKEN, CTX_API_TOKEN } from '$env/static/private';
import { slugify, packageExtractor, mei } from '$lib';
import redisUpdateData from './dataforredis.json';

const ctxTopLevelApiUrl = packageExtractor[0] + mei + packageExtractor[1] + CTX_API_TOKEN;
// this data is from fetching the ctxTopLevelApiUrl (or just going to it in the browser)
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
				'SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType,MaxWidth,MaxHeight,MediaType,CoreField.Representative_Image_RecordID',
			token: 'CortexWMTpmELDXTwYTJ3zZnW5JhQNU@RoRVJJboEveHJFOkQ*'
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
				'CoreField.Representative_Image_RecordID': 'NL1DO000001741949'
			},
			{
				SystemIdentifier: 'NL11L2E5',
				MediaEncryptedIdentifier: '2KXJ8ZSAKD6V9',
				Title: 'Chicago',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001586452'
			},
			{
				SystemIdentifier: 'NL11L2DQ',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDC09',
				Title: 'Dogs',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000000146975'
			},
			{
				SystemIdentifier: 'NL11L2DO',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDB98',
				Title: 'Alcohol',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001734929'
			},
			{
				SystemIdentifier: 'NL11L2DM',
				MediaEncryptedIdentifier: '2KXJ8ZSAKD0AX',
				Title: 'Reading and Writing',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001732515'
			},
			{
				SystemIdentifier: 'NL11L2DK',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDPK2',
				Title: 'Newberry',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001992522'
			},
			{
				SystemIdentifier: 'NL11L2DB',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDMYB',
				Title: 'School Days',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000000728141'
			},
			{
				SystemIdentifier: 'NL11L2D9',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDD11',
				Title: 'Cats',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000000796092'
			},
			{
				SystemIdentifier: 'NL11L2D7',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDRBQ',
				Title: 'Coffee & Tea',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001741848'
			},
			{
				SystemIdentifier: 'NL11L0O4',
				MediaEncryptedIdentifier: '2KXJ8ZSA9MW04',
				Title: "Women's Rights",
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000000132132'
			},
			{
				SystemIdentifier: 'NL11XACY',
				MediaEncryptedIdentifier: '2KXJ8ZSMLBWN6',
				Title: 'New Year',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001921764'
			},
			{
				SystemIdentifier: 'NL11L2DD',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDJCR',
				Title: "Valentine's Day",
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001821193'
			},
			{
				SystemIdentifier: 'NL11XB58',
				MediaEncryptedIdentifier: '2KXJ8ZSMLW43T',
				Title: "Saint Patrick's Day",
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001819096'
			},
			{
				SystemIdentifier: 'NL11L2DI',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDKDK',
				Title: 'Easter',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001817816'
			},
			{
				SystemIdentifier: 'NL11XAQ1',
				MediaEncryptedIdentifier: '2KXJ8ZSMLBK0Z',
				Title: 'Fourth of July',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001733703'
			},
			{
				SystemIdentifier: 'NL11L2DX',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDX4O',
				Title: 'Halloween',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001818902'
			},
			{
				SystemIdentifier: 'NL11L2DZ',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDE3I',
				Title: 'Thanksgiving',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001599897'
			},
			{
				SystemIdentifier: 'NL11L2EB',
				MediaEncryptedIdentifier: '2KXJ8ZSAKDQ5P',
				Title: 'Christmas',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001738568'
			},
			{
				SystemIdentifier: 'NL11XAD0',
				MediaEncryptedIdentifier: '2KXJ8ZSMLBTPJ',
				Title: 'Birthdays',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000000800323'
			},
			{
				SystemIdentifier: 'NL11XAPZ',
				MediaEncryptedIdentifier: '2KXJ8ZSMLBSQC',
				Title: 'Winter',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001749405'
			},
			{
				SystemIdentifier: 'NL11XAPR',
				MediaEncryptedIdentifier: '2KXJ8ZSMLB4ST',
				Title: 'Spring',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000000423930'
			},
			{
				SystemIdentifier: 'NL11XAPV',
				MediaEncryptedIdentifier: '2KXJ8ZSMLBXZV',
				Title: 'Summer',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000002159988'
			},
			{
				SystemIdentifier: 'NL11XAPX',
				MediaEncryptedIdentifier: '2KXJ8ZSMLB0XM',
				Title: 'Autumn',
				'CoreField.IIIFResourceType': 'Manifest',
				MaxWidth: '',
				MaxHeight: '',
				MediaType: 'Album',
				'CoreField.Representative_Image_RecordID': 'NL1DO000001741356'
			}
		],
		useremail: 'c2lkn.t@gmail.com'
	}
};

// use this if you're just updatgin values in redis, not adding new galleries or content;
// const meis = alldata.APIResponse.Content.map((c) => slugify(c.Title));

// use this for full update
const meis = alldata.APIResponse.Content.map((c) => c.MediaEncryptedIdentifier);

export async function load() {
	const galleryDataClient = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN
	});

	// second level of data acquisition: get details for all galleries;
	// does NOT provide displayable images for postcards, just provides gallery data and the gallery's representative
	// (unless OL fixes the api, then you should be able to grab displayable images from here)
	const allltoo = await Promise.all(
		meis.map(async (m) => {
			// return await galleryDataClient.get(m);
			return await fetch(packageExtractor[0] + m + packageExtractor[1] + CTX_API_TOKEN).then((r) =>
				r.json()
			);
		})
	);
	// take this out unless you really need it, it's like 300 api calls
	// uncomment this to get all postcards  from the 'all2' object; print it to the +page.svelte
	// (via <pre>{JSON.stringify(allData, null, 4)}</pre>)
	// and save as a separate file;, then import that and process it

	// const pcardmeis = allltoo
	//      .map((a) => a.APIResponse.Content.map((c) => c.MediaEncryptedIdentifier))
	//      .flat();
	// const allthree = await Promise.all(
	// pcardmeis.map(async (m) => {
	//          double commented section can be used to get all redis data if you only need to update values, and don't need to add new galleeries or postcards
	//          shouldn't be used in conjunction with the cortex api calls, just iterates at the same point in the process
	//      // return await galleryDataClient.get(m);
	//      return await fetch(packageExtractor[0] + m + packageExtractor[1] + CTX_API_TOKEN).then((r) =>
	//          r.json()
	//      );
	//      })
	// );

	// once you have data to submit to redis,
	// import it (as all3) to this file and iterate over it with the below code to update redis
	// make sure you just run this once and then comment it out; redis doesn;t like being talked to
	//
	// await Promise.all(
	// 	redisUpdateData.map(async (a3) => {
	// 		await galleryDataClient.set(a3.slug, a3);
	// 	})
	// );
	return { allltoo };
	// return { allltoo, allthree };
}
