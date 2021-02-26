var config = {
    paths: {
        "intlTelInput": 'Graciasit_InternationalTelephoneInput/js/intlTelInput',
        "intlTelInputUtils": 'Graciasit_InternationalTelephoneInput/js/utils',
        "internationalTelephoneInput": 'Graciasit_InternationalTelephoneInput/js/internationalTelephoneInput'
    },

    shim: {
        'intlTelInput': {
            'deps':['jquery', 'knockout']
        },
        'internationalTelephoneInput': {
            'deps':['jquery', 'intlTelInput']
        }
    }
};