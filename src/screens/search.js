import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

const data = [
  'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200',
];

const genres1 = [
  {name: 'Pop', icon: '👯‍♀️'},
  {name: 'Hip-Hop', icon: '🐇'},
  {name: 'Rock', icon: '🎸'},
  {name: 'Alternative', icon: '👨🏽‍🎤'},
  {name: 'Electronic', icon: '⚡️'},
];

const genres2 = [
  {name: '80s', icon: '👴🏼'},
  {name: 'Lo-fi', icon: '🎧'},
  {name: 'Classical', icon: '🎷'},
  {name: 'Dance', icon: '💃🏻'},
  {name: 'Study', icon: '📚'},
];

const artists = [
  {
    name: 'The Weeknd',
    photo:
      'data:image/jpeg;base64,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',
  },
  {
    name: 'Tame Impala',
    photo:
      'https://www.rollingstone.com/wp-content/uploads/2019/03/Tame-Impala-Matt-Sav-SYNTK.jpg',
  },
  {
    name: 'Billie Eilesh',
    photo:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFBgVEhUYGBgZGhwYHBkYGBgYGhgYGBoaGhgYGRgcIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EAD0QAAEDAgMECAQDCAMBAQEAAAEAAhEDIQQSMQVBUWEGInGBkaGx8BMywdEUUnIjM0JikrLh8TSCokMVB//EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIREBAQACAgMAAwEBAAAAAAAAAAECESExAxJBIjJRYQT/2gAMAwEAAhEDEQA/APNkqRKsWQCVCEGEJYQgBCUIhAIukkJUAIXK6ASAlCIRCAVCEkoBUkq/2D0Vr4kgtGRn53XHcJut1s//APnWGZBqVHvO8AhrT5ZvAhORUxryeDwSSvc6XRfBMECi0xveS8/1OK5r7Iwo/wDhSn9DZ8YT0fq8ORK9XxvRzAv/APm1p4sJb5BZ7H9C2XNCof0uj13+SkXGsSiFMx2zKlIxUaR3Hx59yiIToiQhLCIQCBKUBEJhyhdQhANJUQlQREqEsIBEqIShAIukAJUAiEqISBEqVIgBCVSMDgn1nhlNpcTw3cydyDM0aRe4NaCSTAAEkk7gF6P0a6JNpgVMRZ2uSRbm4xPdou+jeAoYYGHMfWaOu7UM/lHp3KfjMYXb/fFFsxjXHDdWVTaTWCGDT3ZNtxTnXd3Dlz3d3oqSk+XE8rk6kfRSWVp0E+nms/e/Wvp/Fx+I97lGruJMSByElQXvOpInvTlBpN+Hgj22Ljp1+Ecb5u4D1dMDukpKmFa3fccwYXdZ7ov7981UYmu7jAT3INWpdeiHjI8B7eBiR2HisV0h2AaPXp9ZhPe2eK0dPEEnjG8z3qww4DxkdBDrGd4PJPHJGWG3lqFY7d2ccPWczVpu08Wn7KtVMbAEsJAlQRISpUIBpEJQlTJyhdIQHK6CEoQCpISoSASFKgoARCQJUGcoGHAiNd4BHgQvR9jUh8B5YWsMdYwxrmiJMtbF4OnZcLG7F2JUqPvTfliflcAe+L9ynjorivjivT+HRaYOWs4tJt1gWtDnWOhI4dibXDFHxW1BSqGjQJe3MXFxGVzzaxG4i47ir1lV2RoOp1PqpbejlH4hqmXvgDTKxp3uA1c48THYnsdhjkIbYxAWWV26ccdOKBbESCptM8P9BYmrUq07336911O2Vt9oOSoYn+I8eEblOlaX73y6PJWVIQB78lW4ZwdULhcNED9R9hWNEzJJtoOY/wApxnl2cqNBEuVPiKReYaDl4q0qvLjlA7U6xgAj2Ua2XSgfQy2XDKpbp74q3xFBQnUYReCQNoYduIZ8N4Afqx/5TvnkbBYStRLHFrhBBg9y9EFC8lRttbH/ABNMvpwKtMXGmdguf+wV45b4Z54fWBSwunNgwdUKmLmELpCAaQhKmQSJUIAQEAJUgEJUQgESkJYQUG5Wo6PUHYd7XPGSo5uZs/MxhsD/ACk3PGI0lWXRHoi92WvVZG9jXiAOD3jU8m95RtvZ7hivnc8/D6zwBAeSQA3jAhLLjFv4cJcuWjp4hz2yXuceZJ9U5QbdZjozinOz06p69J2UkfxAiQY8Vp8KOKxm9uuzUSOQVVtWrkElWL3wFh+lofUeGh0DURI0sQT3q0ScpTcQ2pzB/wB/ZVuP2ADdpg6zzVRsnGGhiGtdmFJzg05plrtBJOjTI7o4L0PGU2mkS3UQY7bT74oylxPGyqHow5zKTg83Do13kwPVoWqc4NYJ0F+08FmcKYfl3F4d3C/qFcnE54aDaST/ANTHqErfqfXlIY8zG83J98FMpO8fRVdJ8vcd2n39PNWGFJIB4oxqcofqNsob6V1YOauH09ydiYrXsgKIyuWPkb7FWOIaquuySlOKdMbQ6PsqtL6YAdvgDXyWJx2DdSeWPEfUL0fCPLZ9PBV23cAKzDA6wuDp3LSZMcsWBQpv/wCe/wDI/wDpQmj1VyEqEICEIQCoAQlCAEJUiDCu8PhKlCj+Iawlx/jhrhQbxI1DyN5ENB46RtlUYa+uW5gwQ1v5qjh1f6R1v6VO2FtQluSS10Q5v5hzB1Hapytk26v+bxTK7qb0c208Zs73Pa8yZeTf80mbrWYek09bUHfyWHxOA+CfiUrMJGZu5pP8Q4N4jdrxWz6P4kPpRvbbuNwsd7rs8mGpvXKE7APp131GNzNflkgiQWiLg9isWPjtUt+ihuF0WarOXcdOeoeKwTag0vqO1STdPUGJlYye0thBwl7cxiLWMcRHDUcFLwD6jWZKo64ABO5zdxC1BozuTdTZwd2qrLZpMsjN4KiS97uAgen3UmlThriOYHj9z5Kz/CZJTfwIa0c/8qdXR2y1XPdkYTvv4myvMEYa0cgPK6zm2X5RlGsT/wCv8LQYY298AEYpyic10kpTx7lww9Ucylc5WzRcQLEqE6krDEtt4IdRsjQ2hGnBKQs81LexcBiAifhR7AQrD4YQqS8dCEJVTmIhLCEALpIhAKpOAwjqrwxpA3lx0a3eT9t5IUZScJivh97mz2DN9SEKxm8pHoOFwdJtJtKmyzb5j8xJuXHmfsoWN2SwuD8ozC2YWPipmyqwc0FWFRgKxttrvxnrOFbhsPYtddrhBtPfHvUqHs/Cvw1bIATTf8puYjdKtW2KdeZhTI0uds1eUoOkJl4XQNk29ydRDYN1IpPUYpQ5TvSrytWVRF062oFUNqJ1tZXMkXFMqkFRnsSipKC7VG9lrTIbZdNYg/yt81p22aO4LL4++Izbs7R5haqoOp3nyRIWd6S2fK3s9V0zUqNh6ssB4Snqb96qM6H6jtUjLbwTFUXb2n36KVFvfvgqnZGHsTZZqpbhquC1GgiSlT+VCQeKJUBCtyhKEIQCoCAlQAghCEGudibWNOGPNtx+62WHx7XCxWB2NRD6zGEAtM5gdMoElWeMwL8Oc9Fxcz8h+ZvZxHms8pNurx53Kcte94K5DlmcFtsOsTB5q6pYsHeps01lWbaiCVGZUXYepVHZC5JXQKQhI9my5AqJci5fYSkezgrbk78TRvioVEx1j796IwVXPU8fRXjGeVQdqUYh0c/P7ytA27T4+/EKNtXDyzsCXZdSWNnUWPp9Ar6umdu44wFazm8LjsU6k6wVIX5Kx4D0crOi+3Z/tKCxZVx8h/m9QpA0UVzpZPAg+d/VSWlX9T8dOFlydEuay5KZOcqE53IRoPDghCWE3MAlQhACVEIQAlSIQa26Ot/ak8GnukgLQ44Q5jT+o/RUPRj96W8W+hCvKxzVgNzQPJY+Xt1eHpSdKaQYWVAAM+YGLXGXKfAnwVdhNouboVcdLzNJh4P8AWuWWpK8Z+M2r25a7B7YBsVbUMYCsRRY7cCrbCOeNxU3FcrVsrhPfFCp6AedylsoPKg0l1cJn4ucwNAmq2Gdoq7Z+OLa5a75RLe/efIBGjWO1sS2lTzOkAmLCbcPfFcbDxAe9sctecynMfXDmiY7NVG2I4fFlogSNOOZ3vvTxvIyx/HbUY4fsz+kekKNgKcNtx/ypWM+TwHkm8PamT+o+AhaXthOmexNTM+dxt78VKwFc6E+9FENPUcL+N0mBPW8VlvlpZw02HfLYUyi+VVYZ6n0H6eC1lZ2Je/uTc2HauiVwdPe5Ul1KE3lQgPFkqRKm5ghKhACEJUAIQhBrDYdUtrMjeY7lfzFd44iyymGq5Htf+Ug+C11VkvZUZoRbmFnnPrbw3uI3SWmDhnngWO/9AfVU+x8O2AYlX/SRoGEqRb5BB1EvafBVOxKYLBuTl3i1xmltTw44KdQoBM02ntUygTwU1pE2hRHBSmsCZouUgmyRo7aQLuQWN25QyVHZRZ1+6ZI8ZWzfVDWlYbbuOaXkZhwShxB/GuYIJzRx+6uejGLzuccoEOaNd5d9JWZr1ARHKyuuiYyh/a0/wDpiuYzss8rZp6Djj1O9vomW/ue0EeMBdbTPU7x6FDv3beZHqU73WM6VlSn+0jiHeQACg5MjyrN7f208AB3uJCTG4eRmHu3+FlVx1h3dWVOY7Q+/eiqcM+Ae9WOGksneFWKasadSQlLlDY+LjQ+4TvxFpKnR7OEKLmQjY08hShIEoVOUIQhAKhASoAXKVCDIrnZO2PhjJUGZmvAtPFpVMlPylx0bcncOCDx3vho+ke0Kb8MW03uJLmy1wba82MqFsOsMoHJZX8Wajo0aBYeFyrzZNYRB1CVx1NOrDntq6dQKxw7lnqNcSFeYMhZ1pFtRUgFQ2Pt1R9vFcPzGZJtwso5Pgm1XsDDxO7VeeY/DmSYMkrcYhshZjaFPrdp9FWPA38Z2pTdA4haPo2/5/8AqT/U37KvxNPeNDry/wA/dTdh6uj8uvIOafurlTlG9xhmkO735rp56jO1v1TNN+aie/yv6J+Oo3kW/ZFZxGDJc8/zM8hJTjx1T4Jyi3q1DycfBo+64Y3UrNStxDIpkjWR4GfsrDBvyuA4j39VHeOo4cC31CUSMruB+xTnAvJ/PDi06SUuZMYg3ke/f0XJd75I3otJecJVCnmlR7DTzELpcpVs4ypVzKVBlQkSoAQpOBwFSs7LSY555Cw7ToO9abZ/Qd5M4h4YPysIc49p0Hmg5jax4U44P4uHqFrjkDSQIaA57JLn5tSLZR2HktP0kbh8BQJpQKruq0QHuJO97nbtbBU+Ml2zrQCaYecoDRPzGwsEdNccdMjsrClzC4AnrZSYsLSL+KnNplplNdGNo1KRcGdZroBYRIcd1uK2FTBte0PeyDF254aORMT4J53lph0otn1nPqBrAXHuEcyTYDtW2wdDKBm6x4NvH3WEdtz8PiSGNaKYhrmsPzb8wJA6wmL6wvQMLjm1GhzTma4SDG471nnNLmW+Ehgcd8Dh7C5rOjfc3UYPg2KRz5uVCjjhIk6eqqtoYfOIA7JU17ydUgGYckBmjRI0vxB+6NmODKoE6yCN4kETHbF1c18LPWmBxFie07hz17FVO2a4vDqYLQCTYGSePMzvTlHcazY9cOZkOsT4Sw/2qyp/IPd2lZ/ZxcwguBF98XDvmEdonvKv6R1G43Ce2dmjlIdSp2O9GqPhzIUum3qPHEHzAULAm3cPQKL8OfTFR8Zx+n+6E89sAjsPr9wo9cdZw4tH9wUkukdrf8/RECPmmy5KRvFI4pbDuEJEIDzRCELocRUSkQUGWVq+jPRU1gKmIllP+Fujn8+TVW9GdnNqPz1B1GXI/M7c1avG7TJ0sLAAWsNAi3TXHHfK3xGNZh2ZKDGtAtDRAHM8Sq6vt8hpLYFpLjYADUk7gq+rVOUZt5v4FSsPh2ZB1c4cQ64Bgi48IStrWSSMXtnDPdTfjcTIE5aLHaku0e4HxjkrLYTviYJoABhjmuJsBlkXVL0/2x8WqKLfkp6xoXkX8BbxVHhcY8Uiz4xa0fwX603Oiu47xKZcrboi0fGDTqM09o/0tvicAyq3LUEgGYkgHtjVea7DrubiKZYJJeBe0g2d5Erc7X20yg2XHM42DWkG/PgozxvsvGyxlel+ym0XsdTblY4RA0Dh9xHgUvRPbvwXfDqH9m42J0Y7j+k7/HikxeMq40tYGBrQZm8Ax9tyr9t7M/Dua2SczZk2vMGy0nM1e2d4u509RYM1xpxXFap4aAb1hNidKnUmilVlzB8p/iYOHNvn6LY4bEMc0PY4PmOtPVbOmY7uzVYZYXGtccpkksA+Z5gevJdMDn6DKwbt3aTvPJPUMUxo+QvJEOcRaIu1o3COyeJ1VpSrMqMAAjdAgAdiWj2pxWYHQXd5sE98dpHVvvtpx1XeL2K3VV76RY7i3SPyxa3FLR8U/k4brgm8cj4lWOCeYjhdvMcPfJQBTjUgJ+i4giDNwO2TA7NUFV3QMmdxHv6KuwrYcW93gS36BTMO/jbjyKZxDMr824/WAfMDxSvRRHxLesTxb9QncsRy9lGNbYHiPqErxqlBUXLuXL2708QmKj5RonKFxdKnoPOEqRC3cYRKFO2PhQ+q0O+UdZ3YNB4pU5N3TS0WfCwzGNBkjM8gWk7pTF3VQNcoCsqlfgDl0OpHYo+Bw4zOcLgm3YN3ip7dUmosKNMEQ7T67iOaj7Tq/BpPe3LDWudYFpJjeNJVhRpKPtJrMhY4ggi41VE8doUX1qga273nxJuSfMqZi9ntovLHlxcOAgSRNpBW12fspjK/xGtggEePvzVnhq7MzmVMoeHFwDo6zT8rmzraBbSFV8nPBY4T685w+EeyHwWQbF1nCRubwg6qXRc1vWAzOJu513EnhwCs+mGILqzQ0ZmNblkixMknwEX7VE2Xh5cHEWGgSt3Nqkk4aDZwawCSJ4zM9nJcbRwzazcrwCbxa7Sd4SmqqnbG1hTGVt3x3CVEl3wq61yp8RgKdFxzPzxwEDsAm58t602xZLWZmgMbdjBo0n+Jx3uPl65PZ4NWqC4uLjpADr8wdy9IwVNtNmt41gg+IhaZ3+ox/wAO02u3A+e+/arbAU20+s5x/pKqKLw4z/lT8I1jjBF929ZLW9V7S3MDI49iqHt3kamVMxDWM9cswCeJAUNzy4yUrTkDmrluo/U3+4JxiN4J4jyMpB1VxX7V4bfLFuIIEhT6VRtRnuQeBWfpvmvUPOO6ycqYv4L2v/hccruRI6rvKO8Io0vn08zY1i6ZdqnGV5Fx3rv4jTvujUqbarsRIB3JhjLSVOxD2b7qBVeSnwkZhzQmroSDz5CSUStnKCtFsGjlZmI+e88hYfVZ1rZIA3mPFeiUcC0Ma3g0DwCnLpt4pztU7QxRDAxpu4ho5kmyvsBhQGgBUNLCh+KhokUxJ/WbDwHqtYxgaIRjGtNv6rTGq892jtF73uDKrGw7LBY+ewOMgnkFtdq4oMY983aCeQt5lY/YOF+JU+K8EkXEgQCbjKBpP0TlEi7wlMsY1rnZnAdZxtJ323KNja5kBusqZjTB7bqmxWIa2XOPyiYmJO7TdvKic1fxBx46+UwTO4yIH+Z/pXdOG2Cd2NgzVzVXm2aIJLZm40B8Ap7MQQIaGsaDBcwQOMZjMuifDerRtW4mtlYX7hbtPBYutULnEm5JWj6X7Ua5wYzVoyvP5nCxPfHhCb6I7K+I/wCI8dVptzdx7leP4zdTlfa6i96L7D+G3O8dZw/pHBXVV98oTuJqBjCVAwt7lY275aSaTaNODa29SWGNE0wp5nE/7Spn6dMuknvJXbmtGhlMvrT2bgNAgJG7XDm743jfO8Ltcu098UFTDWdcne76aKPtWnnovH8uYdrbj0Up/H3f2EP0PYgSmej2OzsyOMkDvI4jmFdNA+yxuAlhBaYgwD2ewtNh8UHjrWd5H7KZfh54/Ycr4pp+Zk81GqVRFmwnqtIqPkMKmdM3QnMnNCpLztCELRzH8H+8Z+oeq9JahCnJv4ulT0T/AHuI/W71WkOo7T6oQn8afWb6S/8AFqe94UPox8n9PoUIUmk7V+buH1WT258p7vQoQjHs70t9j/uu5/8AYF1U/wCMzsf/AHFCFRfXn2N/eO/UfVegdDv+O3sPqUqFfk/WM8P2T9r/ACjtXGEQhYtU9d7u5CEqccp9qEJAq7chCojVTTuKRyRCkKKno7t+gVnh9yEKPrXLpb4bQpp2qELWOemkIQml/9k=',
  },
  {
    name: 'Dua Lipa',
    photo:
      'data:image/jpeg;base64,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',
  },
  {
    name: 'The Killers',
    photo: 'https://www.nme.com/wp-content/uploads/2012/12/The-Killers.jpg',
  },
];

const {width, height} = Dimensions.get('screen');

export default function search() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for a song</Text>
      <View style={styles.searchArea}>
        <Feather
          name={'search'}
          size={22}
          color={'black'}
          style={{fontWeight: 'bold'}}
        />
        <TextInput
          style={styles.input}
          placeholder={'Search'}
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={styles.filterArea}>
        <IonIcon name={'ios-filter'} color={'white'} size={24} />
      </View>

      <View style={styles.topSongsArea}>
        <Text style={styles.sectionHeader}>Today's Top Hits 💯</Text>
        <FlatList
          style={{position: 'absolute', top: 54, width: width}}
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View style={{justifyContent: 'center'}}>
                <View
                  style={{
                    height: 130,
                    width: 130,
                    borderRadius: 80,
                    backgroundColor: 'black',
                    position: 'absolute',
                    top: 10,
                    left: 50,
                    opacity: 0.9,
                  }}
                />
                <Image source={{uri: item}} style={styles.playlistCover} />
              </View>
            );
          }}
        />
      </View>

      <View style={styles.genreArea}>
        <Text style={styles.sectionHeader}>Trending Genres 📈</Text>
        <View>
          <FlatList
            data={genres1}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return (
                <View style={styles.genreBubble}>
                  <Text style={styles.genreText}>
                    {item.name} {item.icon}
                  </Text>
                </View>
              );
            }}
          />

          <FlatList
            style={{marginTop: 30}}
            data={genres2}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return (
                <View style={styles.genreBubble}>
                  <Text style={styles.genreText}>
                    {item.name} {item.icon}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>

      <View style={styles.artistArea}>
        <Text style={styles.sectionHeader}>Trending Artists 👩🏾‍🎨</Text>
        <FlatList
          style={{marginBottom: 30}}
          data={artists}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 20,
                  marginBottom: 20,
                }}>
                <Image source={{uri: item.photo}} style={styles.artistPhoto} />
                <Text style={styles.artistText}>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#424242',
    position: 'absolute',
    top: 100,
    left: 24,
  },
  searchArea: {
    backgroundColor: '#bfbfbf',
    position: 'absolute',
    opacity: 1,
    top: 160,
    width: 300,
    height: 36,
    borderRadius: 10,
    left: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 6,
  },
  input: {
    marginLeft: 6,
  },
  filterArea: {
    position: 'absolute',
    top: 160,
    backgroundColor: 'black',
    borderRadius: 10,
    height: 36,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
  },
  topSongsArea: {
    position: 'absolute',
    top: 240,
    left: 2,
  },
  sectionHeader: {
    fontSize: 28,
    fontWeight: '600',
    marginLeft: 18,
    marginBottom: 22,
  },
  playlistCover: {
    height: 150,
    width: 150,
    borderRadius: 10,
    marginRight: 40,
  },
  genreArea: {
    position: 'absolute',
    top: 470,
    left: 0,
  },
  artistArea: {
    position: 'absolute',
    top: 650,
    left: 0,
    bottom: 0,
  },
  genreBubble: {
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  genreText: {
    fontWeight: '600',
    fontSize: 15,
  },
  artistPhoto: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
});
