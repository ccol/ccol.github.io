<!-- ENDED UP MOVING TO GITHUB PAGES-->

<script runat=server>
Platform.Load('core', '1');
Platform.Response.Write('works!');
/*

//Only got Eliot's bit up to here - need to add code to fetch DE
var fieldArr = [];

for(var i = 0; i < srcFields.length; i++){
    var field = {};
    field.Name = srcFields[i].Name;
    field.FieldType = srcFields[i].FieldType;
    if(srcFields[i].FieldType == 'Text'){
        field.MaxLength = srcFields[i].MaxLength;
    }
    fieldArr.push(field);
}

var guid = Platform.Function.GUID();
var deName = srcDeNameKey + '_' + guid;

var obj = {
    CustomerKey: guid,
    Name: deName,
    Fields: fieldArr,
    CategoryID: 68808
};

DataExtension.Add(obj);

var data = srcDe.Rows.Retrieve();

Write(Stringify(data));

var targetDE = DataExtension.Init(guid);
var count = targetDE.Rows(Add(data);
*/
</script>
