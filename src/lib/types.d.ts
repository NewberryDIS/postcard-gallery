export interface Gallery {
	pageMEI: string;
	pageTitle: string;
	pageSlug: string;
	postcards: Postcard[];
}
export interface Postcard {
	title: string;
	context: string;
	image: string;
	imageTitle: string;
	width: string;
	height: string;
	link: string;
}
declare namespace APIData {
	interface APIRequestInfo {
		ProviderVersion: string;
		ProviderIdentity: string;
		ProviderID: string;
		Module: string;
		APIVersion: string;
		Resource: string;
		IsLoggedIn: boolean;
		Parameters: {
			Package: string;
			PackageFields: string;
			RepresentativeFields: string;
			ContentFields: string;
		};
		Status: string;
		UserLogin: string;
		Session: string;
		TimeoutPeriodMinutes: number;
	}

	interface Representative {
		SystemIdentifier: string;
		MediaEncryptedIdentifier: string;
		Title: string;
		MaxWidth: string;
		MaxHeight: string;
	}

	interface ContentItem {
		SystemIdentifier: string;
		MediaEncryptedIdentifier: string;
		Title: string;
		'CoreField.IIIFResourceType': string;
	}

	interface APIManifestResponse {
		SystemIdentifier: string;
		MediaEncryptedIdentifier: string;
		Title: string;
		'new.Context': string;
		Representative: Representative;
		'CoreField.IIIFResourceType': string;
		Content: ContentItem[];
		useremail: string;
	}

	interface APICanvasResponse {
		SystemIdentifier: string;
		MediaEncryptedIdentifier: string;
		Title: string;
		'new.Context': string;
		'CoreField.IIIFResourceType': string;
		MaxWidth: string;
		MaxHeight: string;
	}

	export interface CortexManifestData {
		APIRequestInfo: APIRequestInfo;
		APIResponse: APIManifestResponse;
	}
	export interface CortexCanvasData {
		APIRequestInfo: APIRequestInfo;
		APIResponse: APICanvasResponse;
	}
}
export { APIData };
