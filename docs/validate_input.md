~~~
 <ValidateInput
                    key={uuid()}
                    regs={[
                        {reg: reg.exp_email, isRequired: true, error: "is not email"},
                        {reg: reg.exp_not_null, isRequired: true, error: "is not null"}
                    ]}/>
~~~

```key,regs```  is required
```
regs is array
{
    reg:   regular expression eg. /^[0-9]*$/ yuo can get it from './utils/regs.js'
    isRequired: bool active this rule,default is false
    error: string show message  when it is not match
}

```

