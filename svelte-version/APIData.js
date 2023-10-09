/**
 * @typedef {Object} Gallery
 * @exports
 * @property {string} pageMEI
 * @property {string} pageTitle
 * @property {string} pageSlug
 * @property {Postcard[]} postcards
 */

/**
 * @typedef {Object} Postcard
 * @exports
 * @property {string} title
 * @property {string} context
 * @property {string} image
 * @property {string} imageTitle
 * @property {string} width
 * @property {string} height
 * @property {string} link
 */

/**
 * @typedef {Object} APIRequestInfo
 * @property {string} ProviderVersion
 * @property {string} ProviderIdentity
 * @property {string} ProviderID
 * @property {string} Module
 * @property {string} APIVersion
 * @property {string} Resource
 * @property {boolean} IsLoggedIn
 * @property {Object} Parameters
 * @property {string} Parameters.Package
 * @property {string} Parameters.PackageFields
 * @property {string} Parameters.RepresentativeFields
 * @property {string} Parameters.ContentFields
 * @property {string} Status
 * @property {string} UserLogin
 * @property {string} Session
 * @property {number} TimeoutPeriodMinutes
 */

/**
 * @typedef {Object} Representative
 * @exports
 * @property {string} SystemIdentifier
 * @property {string} MediaEncryptedIdentifier
 * @property {string} Title
 * @property {string} MaxWidth
 * @property {string} MaxHeight
 */

/**
 * @typedef {Object} ContentItem
 * @exports
 * @property {string} SystemIdentifier
 * @property {string} MediaEncryptedIdentifier
 * @property {string} Title
 * @property {string} CoreField.IIIFResourceType
 */

/**
 * @typedef {Object} APIResponse
 * @exports
 * @property {string} SystemIdentifier
 * @property {string} MediaEncryptedIdentifier
 * @property {string} Title
 * @property {string} new.Context
 * @property {Representative} Representative
 * @property {ContentItem[]} Content
 * @property {string} useremail
 */

/**
 * @typedef {Object} CortexAPIData
 * @exports
 * @property {APIRequestInfo} APIRequestInfo
 * @property {APIResponse} APIResponse
 */

/**
 * @namespace APIData
 * @type {Object}
 * @property {Gallery} Gallery
 * @property {CortexAPIData} CortexAPIData
 */
export const APIData = {};
