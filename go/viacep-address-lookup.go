package voxgigviacepaddresslookupsdk

import (
	"github.com/voxgig-sdk/viacep-address-lookup-sdk/go/core"
	"github.com/voxgig-sdk/viacep-address-lookup-sdk/go/entity"
	"github.com/voxgig-sdk/viacep-address-lookup-sdk/go/feature"
	_ "github.com/voxgig-sdk/viacep-address-lookup-sdk/go/utility"
)

// Type aliases preserve external API.
type ViacepAddressLookupSDK = core.ViacepAddressLookupSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ViacepAddressLookupEntity = core.ViacepAddressLookupEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ViacepAddressLookupError = core.ViacepAddressLookupError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCepLookupEntityFunc = func(client *core.ViacepAddressLookupSDK, entopts map[string]any) core.ViacepAddressLookupEntity {
		return entity.NewCepLookupEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewViacepAddressLookupSDK = core.NewViacepAddressLookupSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
