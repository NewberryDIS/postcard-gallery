export interface allGalleries {
	sysid: string;
	title: string;
	slug: string;
	imageMei: string;
	mei: string;
	iiiftype: string;
}
export interface Gallery {
	pageMEI: string;
	pageTitle: string;
	pageContext: string;
	pageSlug: string;
	postcards: Postcard[];
}
export interface Postcard {
	title: string;
	image: string;
	width: number;
	height: number;
}

declare namespace CortexAPIResponse {
	interface ItemAPIResponse {
		SystemIdentifier: string;
		MediaEncryptedIdentifier: string;
		Title: string;
		'CoreField.Representative_Image_RecordID': string;
		'new.Context': string;
		'CoreField.IIIFResourceType': string;
		MaxWidth: number;
		MaxHeight: number;
	}
	interface GlobalInfo {
		TotalCount: number;
		QueryDurationMilliseconds: number;
		Sort: string;
	}
	interface SearchAPIResponse {
		GlobalInfo: GlobalInfo;
		Items: ItemAPIResponse[];
	}
	interface Representative {
		SystemIdentifier: string;
		MediaEncryptedIdentifier: string;
		Title: string;
		'CoreField.IIIFResourceType': string;
		MaxWidth: number;
		MaxHeight: number;
	}
	interface ContentAPIResponse {
		SystemIdentifier: string;
		MediaEncryptedIdentifier: string;
		Title: string;
		'CoreField.Representative_Image_RecordID': string;
		'CoreField.IIIFResourceType': string;
		MediaType: string;
		MaxWidth: number;
		MaxHeight: number;
	}
	interface PackageExtractorAPIResponse {
		SystemIdentifier: string;
		MediaEncryptedIdentifier: string;
		Title: string;
		'new.Context': string;
		'CoreField.IIIFResourceType': string;
		MaxWidth: number;
		MaxHeight: number;
		Representative: Representative;
		Content: ContentAPIResponse[];
	}
	interface APIRequestInfo {
		ProviderVersion: string;
		ProviderIdentity: string;
		ProviderID: string;
		Module: string;
		APIVersion: string;
		Resource: string;
		IsLoggedIn: boolean;
		Status: string;
		UserLogin: string;
		Session: string;
		TimeoutPeriodMinutes: number;
	}
	interface fullPackageExtractorAPIResponse {
		APIRequestInfo: APIRequestInfo;
		APIResponse: PackageExtractorAPIResponse;
	}
	interface fullSearchAPIResponse {
		APIRequestInfo: APIRequestInfo;
		APIResponse: SearchAPIResponse;
	}
}
export { CortexAPIResponse };
