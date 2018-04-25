~~~
 <Form ref={(mySelf) => {
                self.__form__ = mySelf
            }}>
            {...children...}
            </Form>
~~~

use
~~~
 this.__form__.isValidate()

 function isValidate can validate
 return {success: false, message: errorMessage}
 or
  return {success: true}
~~~

enjoy it!!
