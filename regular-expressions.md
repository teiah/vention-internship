### Solution:

`(?<protocol>^https?:\/\/)(?<host>[a-zA-Z\d])(?<optinal>([a-zA-Z\d\.-])*[a-zA-Z\d])?(?<ending>\.[a-z]+\/?)$`

### Breakdown:

**Protocol group: `(?<protocol>^https?:\/\/)`**
`^` - asserts position at start of a line + multiline;
`http:` - includes “http:”;
`s?` - matches the previous token (’s’) between zero and one times;
`\/\/` - matches ‘//‘ but have to be escaped with `\`;

**Domain group: `(?<host>[a-zA-Z\d])`**
This group ensures that the domain part starts with a letter, a capital letter of a digit.
It would be sufficient for the example `http://a.b` in matching the part before the `.` - `http://a`
but we have to include more rules to match the other examples as well.

**Optional group: `(?<optinal>([a-zA-Z\d\.-])*[a-zA-Z\d])?`**
This group is optional with a `?` at the end as there is a scenario where it will not be needed - `http://a.b`
`([a-zA-Z\d\.-])*` - this group allows letters, digits, ‘.’ and ‘-’ to be matched zero to unlimited times
so examples like `http://test.this-test.com/` are matched.
`[a-zA-Z\d]` - this group makes sure that the part of the url before the `.com` or `.org` part is a letter or a digit
so examples like `http://example-.com` are NOT matched.

**Ending group: `(?<ending>\.[a-z]+\/?)$`**
This group takes care of the ending of the url for example like `.com`, `.org`, `.io`, etc.
It makes sure there is at least one `.` and a letter with the `+` quantifier and ends optionally with a `/`.
