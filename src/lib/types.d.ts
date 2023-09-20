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
	pagaeContext: string;
	pageSlug: string;
	postcards: Postcard[];
}
export interface Postcard {
	title: string;
	image: string;
	width: string;
	height: string;
}
declare namespace searchAPIData {
    interface ItemAPIResponse {
        SystemIdentifier: string;
        MediaEncryptedIdentifier: string;
        Title: string;
        'CoreField.Representative_Image_RecordID': string;
        'new.Context': string;
        CoreField.IIIFResourceType: string;
        MaxWidth: string;
        MaxHeight": ""
    }
    interface GlobalInfo {
            TotalCount: number;
            QueryDurationMilliseconds: number;
            Sort: string;
        }
    interface APIResponse {
        GlobalInfo: GlobalInfo;
        Items: ItemAPIResponse;
    }
    interface APIRequestInfo {
    ProviderVersion: string;
    ProviderIdentity: string;
    ProviderID: string;
    Module: string;
    APIVersion: string;
    Resource: string;
    IsLoggedIn: boolean,
    Status: string;
    UserLogin: string;
    Session: string;
    TimeoutPeriodMinutes: number;
    }
    interface fullAPIResponse {
        APIRequestInfo: APIRequestInfo;
		APIResponse: APIResponse;
    }
}
export { APIData };
