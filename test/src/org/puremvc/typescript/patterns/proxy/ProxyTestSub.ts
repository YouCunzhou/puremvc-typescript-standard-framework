///<reference path='../../../../../../../test/lib/YUITest.d.ts'/>
///<reference path='../../../../../../../test/lib/puremvc-typescript-standard-1.0.d.ts'/>

module test
{
	"use strict";

	import YUITest = module("YUITest");
	import puremvc = module("puremvc");

	/**
	 * A <code>Proxy</code> utility subclass used by <code>ProxyTest</code>.
	 */
	export class ProxyTestSub
		extends puremvc.Proxy
		implements puremvc.IProxy
	{
		/**
		 * A method to test if <code>Facade</code> instance of the object has well been declared
		 * during its construction.
		 *
		 * @return
		 *		<code>Facade</code> instance of the object has well been declared during its
		 *		construction.
		 */
		hasFacade():bool
		{
			return this.facade instanceof puremvc.Facade;
		}
	}
}