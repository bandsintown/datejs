Date.Specification = new Specification({
  'Overview': {
    setup: function() {  
			Date.currentLocale = "es-MX";
			this.baseline = new Date('7/8/2004') 
		},
    'Julio 8, 2004 : Espanol': {
        run: function() { console.debug(Date.currentLocale); this.date = Date.parse( 'Julio 8, 2004' ) },
        assert: function() { return this.baseline.equals( this.date ) }
    }
  }
});

$(document).ready( function() { Date.Specification.validate().show() } );