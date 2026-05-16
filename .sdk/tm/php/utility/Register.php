<?php
declare(strict_types=1);

// ViacepAddressLookup SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ViacepAddressLookupUtility::setRegistrar(function (ViacepAddressLookupUtility $u): void {
    $u->clean = [ViacepAddressLookupClean::class, 'call'];
    $u->done = [ViacepAddressLookupDone::class, 'call'];
    $u->make_error = [ViacepAddressLookupMakeError::class, 'call'];
    $u->feature_add = [ViacepAddressLookupFeatureAdd::class, 'call'];
    $u->feature_hook = [ViacepAddressLookupFeatureHook::class, 'call'];
    $u->feature_init = [ViacepAddressLookupFeatureInit::class, 'call'];
    $u->fetcher = [ViacepAddressLookupFetcher::class, 'call'];
    $u->make_fetch_def = [ViacepAddressLookupMakeFetchDef::class, 'call'];
    $u->make_context = [ViacepAddressLookupMakeContext::class, 'call'];
    $u->make_options = [ViacepAddressLookupMakeOptions::class, 'call'];
    $u->make_request = [ViacepAddressLookupMakeRequest::class, 'call'];
    $u->make_response = [ViacepAddressLookupMakeResponse::class, 'call'];
    $u->make_result = [ViacepAddressLookupMakeResult::class, 'call'];
    $u->make_point = [ViacepAddressLookupMakePoint::class, 'call'];
    $u->make_spec = [ViacepAddressLookupMakeSpec::class, 'call'];
    $u->make_url = [ViacepAddressLookupMakeUrl::class, 'call'];
    $u->param = [ViacepAddressLookupParam::class, 'call'];
    $u->prepare_auth = [ViacepAddressLookupPrepareAuth::class, 'call'];
    $u->prepare_body = [ViacepAddressLookupPrepareBody::class, 'call'];
    $u->prepare_headers = [ViacepAddressLookupPrepareHeaders::class, 'call'];
    $u->prepare_method = [ViacepAddressLookupPrepareMethod::class, 'call'];
    $u->prepare_params = [ViacepAddressLookupPrepareParams::class, 'call'];
    $u->prepare_path = [ViacepAddressLookupPreparePath::class, 'call'];
    $u->prepare_query = [ViacepAddressLookupPrepareQuery::class, 'call'];
    $u->result_basic = [ViacepAddressLookupResultBasic::class, 'call'];
    $u->result_body = [ViacepAddressLookupResultBody::class, 'call'];
    $u->result_headers = [ViacepAddressLookupResultHeaders::class, 'call'];
    $u->transform_request = [ViacepAddressLookupTransformRequest::class, 'call'];
    $u->transform_response = [ViacepAddressLookupTransformResponse::class, 'call'];
});
