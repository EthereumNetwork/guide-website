<template>
<v-container fluid="fluid">
<v-row style="text-align:center;">
  <v-col xs12="xs12">
  <b><h2>Ethereum Network Stats</h2></b>
  </v-col>
</v-row>
  <v-row>
    <v-col xs2="xs2" v-tooltip:top="{html:'Ethereum Price in USD and BTC'}">
        <v-card>
            <v-card-row class="blue_dark">
            <v-card-title>
              <span class="white--text">Price</span>
              <v-spacer></v-spacer>
            </v-card-title>
            </v-card-row>
            <v-card-text>
            <v-card-row height="75px">
              <div xs12="xs12">
                <strong class="red--text">{{Price}}</strong>
              </div>
            </v-card-row>
            </v-card-text>
      </v-card>
  </v-col>

  <v-col xs2="xs2"  v-tooltip:top="{html:'Average difficulty over the last 24 hours'}">
      <v-card>
          <v-card-row class="blue darken-1">
          <v-card-title>
            <span class="white--text">Difficulty</span>
            <v-spacer></v-spacer>
          </v-card-title>
          </v-card-row>
          <v-card-text>
          <v-card-row height="75px">
            <div>
              <strong class="red--text">{{Difficulty}}</strong>
            </div>
          </v-card-row>
          </v-card-text>
    </v-card>
</v-col>


<v-col xs2="xs2"  v-tooltip:top="{html:'Average block time over the last 24 hours'}">
    <v-card>
        <v-card-row class="dark_green darken-1">
        <v-card-title>
          <span class="white--text">Block time</span>
          <v-spacer></v-spacer>
        </v-card-title>
        </v-card-row>
        <v-card-text>
        <v-card-row height="75px">
          <div>
            <strong class="red--text">{{BlockTime}}</strong>
          </div>
        </v-card-row>
        </v-card-text>
  </v-card>
</v-col>


<v-col xs2="xs2"  v-tooltip:top="{html:'Average hash rate over the last 24 hours'}">
    <v-card>
        <v-card-row class="red darken-1">
        <v-card-title>
          <span class="white--text">Hash rate</span>
          <v-spacer></v-spacer>
        </v-card-title>
        </v-card-row>
        <v-card-text>
        <v-card-row height="75px">
          <div>
              <strong class="red--text">{{HashRate}}</strong>
          </div>
        </v-card-row>
        </v-card-text>
  </v-card>
</v-col>


<v-col xs2="xs2"  v-tooltip:top="{html:'Number of transaction during the last hour'}">
    <v-card>
        <v-card-row class="orange darken-1">
        <v-card-title>
          <span class="white--text">Tx per hour</span>
          <v-spacer></v-spacer>
        </v-card-title>
        </v-card-row>
        <v-card-text>
        <v-card-row height="75px">
          <div>
            <strong class="red--text">{{Txperhour}}</strong>
          </div>
        </v-card-row>
        </v-card-text>
  </v-card>
</v-col>


<v-col xs2="xs2"  v-tooltip:top="{html:'Uncle rate over the last 24 hours'}">
    <v-card>
        <v-card-row class="blue_dark darken-1">
        <v-card-title>
          <span class="white--text">Uncle Rate</span>
          <v-spacer></v-spacer>
        </v-card-title>
        </v-card-row>
        <v-card-text>
        <v-card-row height="75px">
          <div>
              <strong class="red--text">{{UncleRate}}</strong>
          </div>
        </v-card-row>
        </v-card-text>
  </v-card>
</v-col>
</v-row>


<v-row>

<v-col xs4="xs4" style="text-align:center;">
    <h2>Recent blocks</h2>
</v-col>

<v-col xs8="xs8" style="text-align:center;">
    <h2>Recent transactions</h2>
</v-col>

  <v-col xs4="xs4">
  <table>
  <thead>
    <tr>
      <th v-for="rbh in RecentBlockHeader">{{rbh}}</th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="rbr in RecentBlockRow">
        <td>
          <a href="#">{{rbr.Block}}
        </td>

        <td>
    <a href="#">{{rbr.Miner}}
        </td>

        <td>
          {{rbr.Age}}
        </td>

      </tr>

  </tbody>
</table>
  </v-col>




  <v-col xs8="xs8">
  <table>
  <thead>
    <tr>
      <th  v-for="rth in RecentTransactionsHeader">{{rth}}</th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="rtr in RecentTransactionRow">
        <td>
          <a href="#">{{rtr.Hash}} </a>
        </td>

        <td>
        <a href="#">{{rtr.Block}}
        </td>
        <td>
          <a href="#">{{rtr.From}}
        </td>
        <td>
        <a href="#">{{rtr.To}}
        </td>
        <td>
            {{rtr.Amount}}
        </td>
        <td>
            {{rtr.Age}}
        </td>
      </tr>

  </tbody>
</table>
  </v-col>
</v-row>
<br>

<v-row>
<v-col xs4="xs4">
  <v-btn>View more blocks</v-btn>
</v-col>

<v-col xs8="xs8">
  <v-btn>View more Transaction</v-btn>
</v-col>
</v-row>

</v-container>
</template>



<script>
export default {
  name: 'explorer',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer will come later...',
      Price:'$10.22|B0.0116',
      Difficulty:'102.597 T',
      BlockTime:'14.2s',
      HashRate:'7.413 TH/s',
      Txperhour:'2237',
      UncleRate:'6.2%',
      RecentTransactionsHeader:["Hash","Block","From","To","Amount","Age"],
      RecentTransactionRow:[{Hash:"0x2e71772e6...",Block:"3019839",From:"	0xdfad8c8a6...",To:"	0x5fe870c30...",Amount:"1.000 Ether",Age:"a minute ago"},
      {Hash:"0x2e71772e6...",Block:"3019839",From:"	0xdfad8c8a6...",To:"	0x5fe870c30...",Amount:"1.000 Ether",Age:"a minute ago"},
      {Hash:"0x2e71772e6...",Block:"3019839",From:"	0xdfad8c8a6...",To:"	0x5fe870c30...",Amount:"1.000 Ether",Age:"a minute ago"}
      ],
        RecentBlockHeader:["Block","Miner","Age"],
        RecentBlockRow:[{Block:"3019944....",Miner:"ethermine....",Age:"a minute ago....",},
        {Block:"3019944....",Miner:"ethermine....",Age:"a minute ago....",},
        {Block:"3019944....",Miner:"ethermine....",Age:"a minute ago....",}]
    }
  }
}
</script>


<style>
.blue_dark{
background-color:#2c3e50!important;
}

.dark_green
{
background-color:#18bc9c!important;
}
</style>
