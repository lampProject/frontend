

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: '2019-02-28',
  authenticator: new IamAuthenticator({
    apikey: 'RnQNOBm5cSUVitD5GrPDE16QNp8_Dluw8gRIeX9rFmdU',
  }),
  url: 'https://gateway.watsonplatform.net/assistant/api',
//   disableSslVerification: true,
})




module.exports= {

    enviaMensagem:function enviaMensagem (texto){
      return new Promise((resolve, reject)=>{
        let assistantId = 'c88d12ee-d3a6-4dc7-87fe-fb1e90460237';
        assistant.createSession({
          assistantId: assistantId
        })
          .then(res=> {
              var sessionId = res.result.session_id;
              assistant.message({
                assistantId: assistantId,
                  sessionId: sessionId,
                  input: {
                    'message_type': "text",
                    'text':texto
                    }
                  })
                  .then(res => {
                    console.log("chegou do watson:", res.result.output.generic[0])
                    console.log(res.result)
                    resolve(res.result.output.generic[0].text)
                  })
                  .catch(err => {
                    console.log(err);
                    reject(err)
                  });
          })
          .catch(err => {
            console.log(err);
            reject(err)
          });
      }
    ) 
    }
}
