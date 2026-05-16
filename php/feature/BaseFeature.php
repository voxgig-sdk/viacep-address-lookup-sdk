<?php
declare(strict_types=1);

// ViacepAddressLookup SDK base feature

class ViacepAddressLookupBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ViacepAddressLookupContext $ctx, array $options): void {}
    public function PostConstruct(ViacepAddressLookupContext $ctx): void {}
    public function PostConstructEntity(ViacepAddressLookupContext $ctx): void {}
    public function SetData(ViacepAddressLookupContext $ctx): void {}
    public function GetData(ViacepAddressLookupContext $ctx): void {}
    public function GetMatch(ViacepAddressLookupContext $ctx): void {}
    public function SetMatch(ViacepAddressLookupContext $ctx): void {}
    public function PrePoint(ViacepAddressLookupContext $ctx): void {}
    public function PreSpec(ViacepAddressLookupContext $ctx): void {}
    public function PreRequest(ViacepAddressLookupContext $ctx): void {}
    public function PreResponse(ViacepAddressLookupContext $ctx): void {}
    public function PreResult(ViacepAddressLookupContext $ctx): void {}
    public function PreDone(ViacepAddressLookupContext $ctx): void {}
    public function PreUnexpected(ViacepAddressLookupContext $ctx): void {}
}
