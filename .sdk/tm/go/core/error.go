package core

type ViacepAddressLookupError struct {
	IsViacepAddressLookupError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewViacepAddressLookupError(code string, msg string, ctx *Context) *ViacepAddressLookupError {
	return &ViacepAddressLookupError{
		IsViacepAddressLookupError: true,
		Sdk:              "ViacepAddressLookup",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ViacepAddressLookupError) Error() string {
	return e.Msg
}
