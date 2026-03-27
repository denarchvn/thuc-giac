import { StoryNode } from '../types';

export const STORY_DATA: Record<string, StoryNode> = {
  'start': {
    id: 'start',
    title: 'Thức giấc !',
    text: 'Bạn tỉnh dậy trong một căn phòng đổ nát với cơn đau đầu kinh khủng và mớ ký ức hỗn loạn. Bạn mất tới 15 phút để làm dịu cơn đau. Những gì sót lại trong ký ức của bạn là ngày hôm qua là một ngày bình thường, như bao cậu bé 13 tuổi khác,bạn lên lớp, chơi đùa cùng vài người bạn thân, gặp khó khăn với vài đứa nhóc khác, rời trường học, về tới nhà ăn cơm với gia đình và lên giường đi ngủ.',
    choices: [
      { text: 'Xuống giường', nextNodeId: 'get_out_of_bed' },
      { text: 'Chờ một chút', nextNodeId: 'wait_a_moment' }
    ],
    image: 'https://picsum.photos/seed/ruined-room/1200/800',
    imagePrompt: 'A cinematic, wide shot of a decaying, ruined bedroom. Peeling wallpaper hangs like dead skin. Shafts of cold, grey light illuminate thick dust motes dancing in the air. Broken toys and shattered furniture litter the floor. The atmosphere is heavy with age and abandonment.'
  },
  'get_out_of_bed': {
    id: 'get_out_of_bed',
    text: 'Bạn bước xuống giường, cảm thấy thật bất ngờ khi dẫm lên thứ gì đó sền sệt dưới sàn. Nó đem lại cảm giác khó chịu xông thẳng tới não khiến bạn tỉnh táo hơn một chút.',
    choices: [
      { text: 'Kiểm tra dưới chân', nextNodeId: 'check_under_feet' }
    ],
    image: 'https://picsum.photos/seed/slimy-floor/1200/800',
    imagePrompt: 'A visceral, low-angle close-up of a pale, bare foot pressing into a pool of thick, dark, viscous slime on a rotting wooden floor. The substance oozes between the toes. The lighting is dim and sickly.'
  },
  'wait_a_moment': {
    id: 'wait_a_moment',
    text: 'Chờ chút đã. Có gì đó không đúng??? Bây giờ là mấy giờ? Bạn lục tìm điện thoại. Nhưng không tìm được gì dưới lớp chăn ngoại trừ tung lên một đống bụi bặm. Bạn với tay tới đồng hồ ở đầu giường. Chiếc đồng hồ đã hết pin, và nó cũ kỹ một cách kỳ lạ. Không. Là cả căn phòng cũ kỹ và bẩn thỉu một cách kỳ lạ. Mặc dù xung quanh tối đen nhưng bạn vẫn nhận ra được mọi thứ đều trở nên dơ bẩn phủ đầy bụi, và nấm mốc tủ đầu giường, những bức tường xung quanh, ô cửa sổ, và kể cả chiếc giường bạn đang nằm. Cứ như thể căn phòng đã bị bỏ trống trong hàng năm trời vậy.',
    choices: [
      { text: 'Xuống giường', nextNodeId: 'get_out_of_bed' }
    ],
    image: 'https://picsum.photos/seed/moldy-room/1200/800',
    imagePrompt: 'A macro shot of an ancient, mold-encrusted nightstand. An old analog clock with cracked glass and frozen hands sits atop it. Thick layers of grey dust cover everything. The darkness of the room feels alive and oppressive.'
  },
  'check_under_feet': {
    id: 'check_under_feet',
    text: 'Bạn cúi người xuống kiểm tra xem thứ mình dẫm phải là gì. Một hỗn hợp của chất lỏng và những mảnh vụn của thứ gì đó trộn lẫn bên trong tạo nên một cảm giác dinh dính đầy kinh tởm. Và mùi của nó bắt đầu bốc lên gây cho bạn một cảm giác buồn nôn. Cứ như ai đó đổ một nồi súp thịt băm ra sàn tối hôm qua vậy. Không. Có lẽ là mười nồi thì đúng hơn. Bởi vì trong bóng tối, bạn nhận ra thứ đó trải đầy khắp phòng.',
    choices: [
      { text: 'Sợ hãi quay lại giường', nextNodeId: 'back_to_bed' },
      { text: 'Kiểm tra tủ đầu giường', nextNodeId: 'check_nightstand' }
    ],
    image: 'https://picsum.photos/seed/disgusting-floor/1200/800',
    imagePrompt: 'A terrifying low-angle shot of a floor submerged in a thick, dark-red mixture of blood and unidentifiable organic chunks. It looks like a grotesque soup of meat. The texture is wet, shiny, and repulsive under a faint, flickering light.'
  },
  'back_to_bed': {
    id: 'back_to_bed',
    text: 'Sự sợ hãi khiến bạn quay trở lại. Bạn không cảm giác được bất cứ sự an toàn nào từ những thứ xung quanh. Mọi thứ thật kỳ lạ, bạn chỉ mong đây là cơn ác mộng và bạn có thể thoát ra khỏi nó.',
    choices: [
      { text: 'Cố gắng ngủ', nextNodeId: 'try_to_sleep' },
      { text: 'Chờ trời sáng', nextNodeId: 'wait_for_dawn' }
    ],
    image: 'https://picsum.photos/seed/scared-bed/1200/800',
    imagePrompt: 'A wide shot of a small, trembling boy huddled beneath a tattered, stained blanket on a bed covered in black mold. The shadows in the corners of the room seem to stretch and reach toward him like long, skeletal fingers.'
  },
  'check_nightstand': {
    id: 'check_nightstand',
    text: 'Chiếc tủ cũ kỹ cất đầy đồ chơi của bạn không đem lại gì nhiều. Bạn chỉ có thể tìm thấy một cuốn sổ với những trang giấy màu đen. Nhưng chúng đã bị xé rách chỉ còn lại một trang duy nhất.',
    choices: [
      { text: 'Trang giấy', nextNodeId: 'the_page' }
    ],
    image: 'https://picsum.photos/seed/old-nightstand/1200/800',
    imagePrompt: 'A focused shot of a weathered wooden nightstand. A tattered black notebook lies open, its pages yellowed and torn. One remaining page stands out, illuminated by a ghostly, unnatural light.'
  },
  'try_to_sleep': {
    id: 'try_to_sleep',
    text: 'Bạn nằm lại giường, trùm lên mình tấm chăn cũ kỹ, bụi bặm và cố gắng để ngủ. Những thứ mùi kỳ lạ của nấm mốc, của thứ dưới sàn, của bụi, những âm thanh kỳ lạ vang vọng từ xa như đánh thẳng vào tâm trí yếu ớt của bạn. Đem đến cho bạn sự sợ hãi tột độ. Và rồi, trong sự hoảng loạn, bạn thiếp đi lúc nào không hay . . .',
    choices: [
      { text: 'Tỉnh Dậy!!!!', nextNodeId: 'wake_up' }
    ],
    image: 'https://picsum.photos/seed/sleeping/1200/800',
    imagePrompt: 'A haunting image of a boy trapped in a restless sleep on a decaying bed. The walls are alive with distorted, nightmarish shadows that mimic grasping hands. The air feels thick with the scent of rot and fear.'
  },
  'wait_for_dawn': {
    id: 'wait_for_dawn',
    text: 'Ngồi trên giường và cảnh giác với mọi thứ xung quanh, bạn để ý tới những thứ mùi lạ trong căn phòng, bắt đầu nghe thấy những âm thanh kỳ lạ không biết vọng lại từ đâu, một chút ánh sáng phía chân trời nơi cửa sổ. Có lẽ, trời sắp sáng. Cuốn tấm chăn bụi bặm quanh người, ôm lấy chiếc gối cũ kỹ và nấm mốc, bạn hướng về phía cửa sổ, bỏ qua suy nghĩ về những thứ xung quanh và chỉ nhìn vào chút ánh sáng phía xa. Dần dần, sự mỏi mệt dâng lên trong bạn, mọi thứ như mờ dần đi . . .\n\n.\n\n.\n\n.',
    choices: [
      { text: 'Tỉnh Dậy!!!!', nextNodeId: 'wake_up' }
    ],
    image: 'https://picsum.photos/seed/waiting-dawn/1200/800',
    imagePrompt: 'A melancholic shot of a boy sitting on the edge of a moldy bed, wrapped in a dusty blanket. He stares out a grime-streaked window at a thin, sickly sliver of light on the horizon. The contrast between the dark, rotting room and the distant light is stark.'
  },
  'wake_up': {
    id: 'wake_up',
    title: 'Tỉnh dậy!!!!',
    text: 'Tiếng chuông báo thức vang lên, bạn bật dậy với lưng áo ướt đẫm mồ hôi.\n\n"Vừa rồi là mơ chăng?"\n\nBạn tự nhủ trong lòng.\n\nCũng như những giấc mơ khác, bạn dần quên đi những gì vừa xảy ra. Từng phần, từng phần một, mọi thứ trở nên mờ nhạt và tan biến dần ra khỏi trí nhớ của bạn.\n\nÁnh nắng chiếu qua cửa sổ, tiếng bố mẹ nói chuyện dưới phòng khách, mùi thơm của bánh crepe bay lên phòng. Mọi thứ sạch sẽ và thơm tho như nó hẳn phải như vậy. . .',
    choices: [
      { text: 'Bước xuống giường', nextNodeId: 'downstairs_breakfast' }
    ],
    image: 'https://picsum.photos/seed/sunny-bedroom/1200/800',
    imagePrompt: 'A beautiful, over-saturated shot of a sun-drenched, pristine bedroom. Warm golden light pours through the window, illuminating clean white sheets and colorful posters. The air looks fresh and clear, a jarring contrast to the previous decay.'
  },
  'downstairs_breakfast': {
    id: 'downstairs_breakfast',
    title: 'Làm lại nhé',
    text: 'Ồ, chúng ta lại gặp nhau. Cả tôi và bạn đều biết câu chuyện không chỉ đơn giản như thế phải không. Đôi khi mọi thứ không phải như những gì nhìn thấy. Bạn có muốn thử lại một lần nữa không?',
    choices: [
      { text: 'Thử lại nhé', nextNodeId: 'start' }
    ],
    image: 'https://picsum.photos/seed/mystery/1200/800',
    imagePrompt: 'A surreal, dreamlike landscape where a path of white stones leads into a thick, glowing fog. Strange, impossible geometric shapes float in the distance. The atmosphere is both inviting and deeply unsettling.',
    isEnding: true,
    endingType: 'neutral'
  },
  'the_page': {
    id: 'the_page',
    title: 'Mảnh giấy đầu tiên',
    text: '"GIƯỜNG LÀ NƠI AN TOÀN NHẤT"\n\n"ĐỪNG QUAY LƯNG LẠI VỚI BẢN THÂN"\n\nNhững dòng chữ viết bằng mực phát quang đang tỏa ra ánh sáng màu xanh lục trong đêm tối. Và những gì được viết lên thực sự khiến bạn khó hiểu.\n\nCó lẽ, đây là một câu danh ngôn nào đó về sự phản bội chăng???',
    choices: [
      { text: 'Vào phòng tắm', nextNodeId: 'go_to_bathroom' }
    ],
    image: 'https://picsum.photos/seed/paper-page/1200/800',
    imagePrompt: 'A close-up of a pitch-black page. Glowing, radioactive-green ink spells out the words "GIƯỜNG LÀ NƠI AN TOÀN NHẤT". The light from the text casts a sickly green hue on the surrounding darkness.'
  },
  'go_to_bathroom': {
    id: 'go_to_bathroom',
    title: 'Phòng tắm',
    text: 'Bạn lần mò vào phòng tắm bằng trí nhớ của mình. Những thứ dưới sàn trải đầy cả vào đây. Bạn thử mở vòi nước nhưng không có gì chảy ra cả.\n\nTrong khi cúi xuống vòi nước, khóe mắt bạn hình như nhìn thấy thứ gì đó lướt qua trong gương.',
    choices: [
      { text: 'Bỏ qua', nextNodeId: 'ignore_mirror' },
      { text: 'Kiểm tra tấm gương', nextNodeId: 'check_mirror' }
    ],
    image: 'https://picsum.photos/seed/bathroom/1200/800',
    imagePrompt: 'A wide shot of a claustrophobic, grimy bathroom. The walls are stained with damp and mold. A large, cracked mirror hangs above a rusted sink. The floor is slick with a dark, shimmering slime. The air is heavy with the smell of stagnant water.'
  },
  'ignore_mirror': {
    id: 'ignore_mirror',
    title: 'Kiểm tra xung quanh',
    text: 'Tránh nhìn vào gương, bạn lục lọi trong phòng tắm. Hình như những thứ dưới sàn ở đây nhiều hơn bên ngoài.\n\nCuối cùng bạn cũng tìm được một mẩu giấy được vo tròn lại mắc kẹt dưới bồn rửa mặt. Vẫn là một mẩu giấy màu đen được xé ra từ cuốn sổ với những dòng chữ phát quang.',
    choices: [
      { text: 'Đọc', nextNodeId: 'the_scrap_of_paper' }
    ],
    image: 'https://picsum.photos/seed/searching-bathroom/1200/800',
    imagePrompt: 'A close-up of a grime-covered bathroom sink. A small, crumpled ball of black paper is wedged deep in the drain. The lighting is harsh and clinical.'
  },
  'check_mirror': {
    id: 'check_mirror',
    title: 'Kiểm tra tấm gương',
    text: 'Bạn ngẩng đầu thật nhanh và nhìn thẳng vào gương. Không phải thứ gì đó, đó là chính bạn.\n\nChỉ là. . . "bạn" trong gương ngẩng đầu chậm hơn một giây, trái ngược với vẻ mặt hoảng sợ của bạn bây giờ. Nó treo trên môi một nụ cười ghê rợn, hàm răng trắng như ánh sáng lên trong khung cảnh tối om của căn phòng: "Ồ, lộ rồi".',
    choices: [
      { text: 'Chạy!!!', nextNodeId: 'run_away' },
      { text: 'Đứng lại và thử giao tiếp', nextNodeId: 'try_to_communicate' }
    ],
    image: 'https://picsum.photos/seed/scary-mirror/1200/800',
    imagePrompt: 'A chilling split-screen effect in a cracked mirror. On one side, a terrified boy; on the other, his reflection wears a wide, inhuman grin that reveals rows of sharp, needle-like teeth. The reflection\'s eyes glow with a faint, predatory light.'
  },
  'the_scrap_of_paper': {
    id: 'the_scrap_of_paper',
    title: 'Mẩu giấy thứ hai',
    text: 'HÃY TRÁNH XA ÁNH SÁNG',
    choices: [
      { text: 'Rời phòng tắm', nextNodeId: 'leave_bathroom' },
      { text: 'Quay lưng lại', nextNodeId: 'leave_bathroom_trap' }
    ],
    image: 'https://picsum.photos/seed/scrap-paper/1200/800',
    imagePrompt: 'A macro shot of a jagged scrap of black paper. Glowing, toxic-green letters pulse with the message: "HÃY TRÁNH XA ÁNH SÁNG". The paper seems to vibrate with a low, ominous hum.'
  },
  'leave_bathroom': {
    id: 'leave_bathroom',
    title: 'Giữa phòng',
    text: 'Trở lại đứng giữa căn phòng tối tăm, dưới chân là những thứ kinh tởm vẫn đang kích thích dây thần kinh của bạn, bạn sẽ làm gì tiếp theo.',
    choices: [
      { text: 'Kiểm tra phòng tắm', nextNodeId: 'recheck_bathroom' },
      { text: 'Kiểm tra cửa sổ', nextNodeId: 'check_window' },
      { text: 'Kiểm tra cửa chính', nextNodeId: 'check_main_door' }
    ],
    image: 'https://picsum.photos/seed/middle-room/1200/800',
    imagePrompt: 'A wide, cinematic shot of the boy standing alone in the center of his ruined bedroom. The floor is a sea of dark, bubbling gore. The walls are closing in, and the air is thick with a suffocating sense of dread.'
  },
  'check_window': {
    id: 'check_window',
    title: 'Tiến về phía cửa sổ',
    text: 'Xuyên thấu qua ô cửa sổ là một mảnh tối tăm, bạn không nhận ra bất cứ thứ gì trong đống hình thù kỳ dị kia.\n\nNhưng bạn chắc chắn một điều, những căn nhà hàng xóm đã biến mất.\n\nChỉ có duy nhất căn nhà của bạn giữa một không gian trống trải vô tận, xung quanh là những hình thù kỳ quái như những bức tượng của quái thú, cây cối và những thứ không thể gọi tên.',
    choices: [
      { text: 'Tiếp tục quan sát', nextNodeId: 'continue_observing_window' },
      { text: 'Chờ trời sáng', nextNodeId: 'wait_for_light' }
    ],
    image: 'https://picsum.photos/seed/window-view/1200/800',
    imagePrompt: 'A haunting view through a cracked windowpane. Outside, the world has been replaced by a vast, swirling void of absolute darkness. Massive, eldritch silhouettes of impossible creatures loom in the distance, their shapes shifting and twisting.'
  },
  'continue_observing_window': {
    id: 'continue_observing_window',
    title: 'Bầu trời',
    text: 'Bầu trời phía xa ánh lên ráng màu đỏ. Hình như trời sắp sáng.',
    choices: [
      { text: 'Thử mở cửa sổ', nextNodeId: 'try_open_window' },
      { text: 'Quan sát tiếp', nextNodeId: 'observe_more' }
    ],
    image: 'https://picsum.photos/seed/red-sky/1200/800',
    imagePrompt: 'The dark void outside the window is being slowly consumed by a deep, pulsating crimson glow on the horizon. It looks like an open wound in the sky, bleeding light into the darkness.'
  },
  'observe_more': {
    id: 'observe_more',
    title: 'Bình minh',
    text: 'Đó không phải là bình minh.\n\nBạn chắc chắn điều đó, bởi vì không hề tồn tại mặt trời nào cả.\n\nÁnh đỏ cắn nuốt bóng đêm.\n\nĐúng vậy, là cắn nuốt, như những kẻ săn mồi, chúng lao đến, xé nhỏ và nuốt chửng bóng tối, từng mảng từng mảng một.\n\nNhưng mặc dù bức tranh có kỳ dị thế nào đi nữa.\n\nNó cũng mang lại ánh sáng.',
    choices: [
      { text: 'Ánh sáng', nextNodeId: 'dawn_light' }
    ],
    image: 'https://picsum.photos/seed/not-sunrise/1200/800',
    imagePrompt: 'A terrifying spectacle of a sky without a sun. Jagged streaks of blood-red light tear through the black void, "eating" the darkness like a celestial predator. The light is violent and unnatural.'
  },
  'dawn_light': {
    id: 'dawn_light',
    title: 'Ánh sáng',
    text: 'Ánh sáng màu đỏ bắt đầu lan tỏa khắp mọi nơi. Nó khiến cho bạn nhận ra nhiều thứ.\n\nĐầu tiên là dưới chân mình, những thứ phủ đầy căn phòng mà trước đó bạn chưa thể gọi tên, giờ đây bạn đã biết đó là gì. Cả một căn phòng tràn ngập trong máu và thịt nát.\n\nThứ tiếp theo bạn nhận ra là những hình thù quái dị bên dưới. Chúng là con người, nhưng toàn bộ đều vặn vẹo và dị dạng. Có những cá thể cao hơn 3 mét và mọc đầy những cục u trên người. Có kẻ là một bãi chất lỏng dưới đất với chỉ mỗi đầu còn nguyên vẹn. Có kẻ không còn chút hình dáng gì của con người, thứ duy nhất khiến bạn xác định được là đôi mắt.',
    choices: [
      { text: 'Đôi mắt', nextNodeId: 'eyes_reveal' }
    ],
    image: 'https://picsum.photos/seed/red-light-room/1200/800',
    imagePrompt: 'The bedroom is drenched in a sickening, monochromatic red light. The floor is revealed to be a literal carpet of raw meat and clotted blood. Outside, the silhouettes are now clearly visible as grotesque, mutated humanoids with elongated limbs and multiple eyes.'
  },
  'eyes_reveal': {
    id: 'eyes_reveal',
    title: 'Đôi mắt',
    text: 'Đúng vậy, đôi mắt\n\nDù cho những kẻ đó có biến thành bất cứ thứ gì, thứ tồn tại duy nhất giữ lại là đôi mắt.\n\nVà lúc này đây, tất cả chúng quay về phía bạn.\n\nNhững đôi mắt xanh giống hệt nhau như chúng là một. Những con quái vật phía dưới không hề cử động, nhưng bạn biết chúng còn sống, chúng có ý nghĩ của mình. Vì. Bạn cũng đang biến đổi.',
    choices: [
      { text: 'Tia sáng', nextNodeId: 'beam_of_light' }
    ],
    image: 'https://picsum.photos/seed/blue-eyes/1200/800',
    imagePrompt: 'A terrifying close-up of the darkness outside, now filled with thousands of glowing, crystalline blue eyes. They all stare with a singular, unified focus at the boy. The red light reflects off the wet, multifaceted surfaces of the eyes.'
  },
  'beam_of_light': {
    id: 'beam_of_light',
    title: 'Tia sáng',
    text: 'Khi tia sáng đầu tiên chiếu đến. Bạn đã không thể cử động được. Khi đã bị ánh đỏ bao phủ hoàn toàn, bạn bắt đầu biến đổi. Cơ thể bắt đầu mọc ra những bộ phận kỳ lạ, ý nghĩ vẫn thanh tỉnh, bạn vẫn cảm nhận được những cơn đau như xé rách chạy khắp toàn bộ thân thể. Khi toàn bộ cơ thể đã bị bao trùm bởi một lớp da màu đen, ý thức của bạn bắt đầu chậm lại. Bạn đã được trả tự do, nhưng bạn bỗng dưng hiểu được, bây giờ bạn cần đi ngủ.',
    choices: [
      { text: 'Cửa kính', nextNodeId: 'glass_door_reflection' }
    ],
    image: 'https://picsum.photos/seed/beam-light/1200/800',
    imagePrompt: 'A blinding, solid beam of crimson light strikes the boy. His body is mid-transformation, skin turning into a dark, obsidian-like substance. His limbs are elongating into jagged, unnatural shapes. The scene is one of agonizing, beautiful horror.'
  },
  'glass_door_reflection': {
    id: 'glass_door_reflection',
    title: 'Cửa kính',
    text: 'Trước khi ý thức hoàn toàn chìm xuống, bạn cố gắng nhìn về phía trước. Cửa kính. Những gì bạn nhìn thấy là một nửa bầu trời bị chiếm bởi ánh đỏ, một đôi mắt màu xanh đến giờ bạn mới nhận ra đó là của mình. Cánh cửa phòng phía sau đang từ từ mở ra, một bóng đen đang cúi gập người chui vào phòng. Và trên giường, hình như có ai đó đang nằm dưới lớp chăn.',
    choices: [
      { text: 'GAME OVER', nextNodeId: 'restart_node' }
    ],
    image: 'https://picsum.photos/seed/glass-reflection/1200/800',
    imagePrompt: 'A haunting reflection in a glass door. A tall, spindly creature with glowing blue eyes and obsidian skin stares back. In the background, a massive, hunched shadow is seen slithering into the room from the doorway. The sky outside is a violent red.'
  },
  'try_open_window': {
    id: 'try_open_window',
    title: 'Thử mở cửa sổ',
    text: 'Cửa sổ đã khóa, dù bạn dùng sức thế nào cũng không thể lung lay nó. Bạn quá sợ hãi để tạo ra những tiếng động mạnh. Trong khi loay hoay với ô cửa, bạn tìm thấy một mảnh giấy được nhét vào khe cửa.',
    choices: [
      { text: 'Đọc mẩu giấy', nextNodeId: 'read_window_scrap' }
    ],
    image: 'https://picsum.photos/seed/stuck-window/1200/800',
    imagePrompt: 'A desperate shot of a small boy clawing at a heavy, locked window frame. The glass is cold and unyielding. A tiny, weathered note is wedged into the wood, illuminated by a faint, ghostly light.'
  },
  'read_window_scrap': {
    id: 'read_window_scrap',
    title: 'Đọc mẩu giấy',
    text: 'Vẫn là mảnh giấy màu đen với chữ viết bằng mực phản quang.\n\n"ĐỪNG LÀM ỒN KHI TRỜI CHƯA SÁNG"',
    choices: [
      { text: 'Nhìn ra phía ngoài', nextNodeId: 'observe_more' }
    ],
    image: 'https://picsum.photos/seed/window-note/1200/800',
    imagePrompt: 'A macro shot of a black paper scrap. Glowing, neon-green letters scream the warning: "ĐỪNG LÀM ỒN KHI TRỜI CHƯA SÁNG". The surrounding wood of the window frame is rotting and covered in black mold.'
  },
  'wait_for_light': {
    id: 'wait_for_light',
    title: 'Chờ đợi',
    text: 'Bạn quyết định đứng trước cửa sổ chờ trời sáng.\n\nMảng đỏ trên bầu trời càng ngày càng lớn.\n\nNhưng có gì đó kỳ lạ.\n\nĐó không phải là màu đỏ của ánh bình minh.\n\nMột màu đỏ như máu xâm chiếm lấy bầu trời tối đen.',
    choices: [
      { text: 'Quan sát tiếp', nextNodeId: 'observe_more' }
    ],
    image: 'https://picsum.photos/seed/waiting-window/1200/800',
    imagePrompt: 'The boy stands motionless by the window, his silhouette small against the vast, bleeding sky. The horizon is a deep, pulsating crimson that seems to be physically pressing against the glass. The silence is deafening.'
  },
  'check_main_door': {
    id: 'check_main_door',
    title: 'Tiến về phía cửa',
    text: 'Bạn bước đôi chân trần lên những thứ dơ dớp đó, âm thanh và cảm giác truyền thẳng đến não bạn, khiến mọi thứ càng trở nên kỳ dị và đáng sợ.\n\nCửa đang khóa, nhưng theo như trí nhớ thì cánh cửa này không khóa với bên trong.',
    choices: [
      { text: 'Thử gọi bố mẹ', nextNodeId: 'call_parents' }
    ],
    image: 'https://picsum.photos/seed/door-locked/1200/800',
    imagePrompt: 'A low-angle shot of a massive, iron-bound wooden door. It looks ancient and immovable. The floor leading to it is a thick, bubbling swamp of dark gore. The door handle is rusted and cold.'
  },
  'call_parents': {
    id: 'call_parents',
    title: 'Thử gọi bố mẹ',
    text: '"Mẹ ơi, Bố ơi, có ai ở ngoài đó không, đến giúp con với"\n\nBạn hét lên nhưng không có ai đáp lại.\n\nChỉ là. . . hình như có tiếng ai đó đang leo lên cầu thang.',
    choices: [
      { text: 'Tiếp tục lên tiếng', nextNodeId: 'continue_calling' },
      { text: 'Im lặng', nextNodeId: 'stay_silent' }
    ],
    image: 'https://picsum.photos/seed/calling-out/1200/800',
    imagePrompt: 'A wide shot of the boy pressing his ear against the heavy door, his mouth open in a silent plea. Behind him, the shadows of the room seem to coalesce into the shape of a grand, decaying staircase leading into darkness.'
  },
  'continue_calling': {
    id: 'continue_calling',
    title: 'Tiếp tục lên tiếng',
    text: '"Mẹ à, có phải mẹ đó không, hay là bố, bố ơi, khóa cửa phòng con bị hỏng, và trong phòng trở nên bẩn thỉu một cách kỳ lạ, trên sàn đầy thứ gì đó rất ghê tởm. Và trong gương có thứ gì đó rất kinh khủng. Mở cửa giúp con bố ơi"\n\nKhông có tiếng đáp lại, chỉ có những tiếng bước chân nặng nề tiến về phía phòng bạn.',
    choices: [
      { text: 'Cửa mở', nextNodeId: 'door_opens' }
    ],
    image: 'https://picsum.photos/seed/continue-calling/1200/800',
    imagePrompt: 'A tense shot of the boy\'s face pressed against the door, his eyes wide with terror. Outside, the sound of heavy, rhythmic footsteps echoes through the hallway, drawing closer with every beat.'
  },
  'stay_silent': {
    id: 'stay_silent',
    title: 'Im lặng',
    text: 'Bạn im lặng và chờ đợi, tiếng chân ngày một gần, bạn không biết liệu phía bên kia cánh cửa điều gì đang chờ đợi mình',
    choices: [
      { text: 'Nhìn qua lỗ khóa', nextNodeId: 'look_keyhole' },
      { text: 'Nhìn qua khe cửa', nextNodeId: 'look_door_gap' },
      { text: 'Tìm chỗ trốn', nextNodeId: 'find_hiding_spot' }
    ],
    image: 'https://picsum.photos/seed/stay-silent/1200/800',
    imagePrompt: 'A wide shot of the boy crouching in a dark corner of the room, his hand over his mouth to stifle his breathing. The door is a dark rectangle in the background, with a thin sliver of light showing at the bottom.'
  },
  'door_opens': {
    id: 'door_opens',
    title: 'Cửa mở',
    text: 'Cánh cửa được mở ra, đó không phải là bất cứ ai trong gia đình bạn. Bạn còn không biết chắc đó có phải con người hay không. Một người phụ nữ mặc một chiếc váy đen, gầy và cao quá cỡ, đang phải cúi gập người mới có thể tiến vào phòng. Những nếp nhăn xếp chồng lên nhau phủ đầy gương mặt. Đang vung mạnh chiếc móc trên tay về phía bạn.',
    choices: [
      { text: 'Đau đớn', nextNodeId: 'pain' }
    ],
    image: 'https://picsum.photos/seed/tall-woman-black-dress/1200/800',
    imagePrompt: 'A terrifying image of a impossibly tall, skeletal woman in a tattered black Victorian dress. She is hunched over, her head nearly touching the ceiling as she enters the room. Her face is a mass of deep wrinkles and hollow sockets. She grips a large, rusted meat hook.'
  },
  'pain': {
    id: 'pain',
    title: 'Đau đớn',
    text: 'Cảm giác duy nhất bây giờ bạn có thể cảm nhận được là đau đớn. Chiếc móc cắm thẳng vào lưng và xuyên qua, lộ hẳn một phần nhọn hoắt trước ngực.\n\nBạn đang bị kéo đi trên một hành lang tưởng chừng như vô tận. Máu đã chảy quá nhiều, bạn không còn đủ sức để gào thét hay dãy dụa.',
    isEnding: true,
    endingType: 'bad',
    choices: [
      { text: 'GAME OVER', nextNodeId: 'downstairs_breakfast' }
    ],
    image: 'https://picsum.photos/seed/pain-ending/1200/800',
    imagePrompt: 'A haunting, perspective-distorted shot of a dark, infinite hallway. A thick, smearing trail of blood leads into the distance. The atmosphere is one of absolute despair and the cold embrace of the abyss.'
  },
  'look_keyhole': {
    id: 'look_keyhole',
    title: 'Nhìn qua lỗ khóa',
    text: 'Bạn cúi xuống, nhìn qua lỗ khóa.\n\nThứ bạn nhìn thấy khiến bạn hoảng sợ tột độ.\n\nMột con mắt. Một con mắt toàn lòng trắng nhưng lại đỏ lên ghê rợn với những tia máu vằn vện quanh con ngươi.\n\nKẻ đó không phải là bố mẹ.\n\nKẻ đó đã nhìn thấy bạn',
    choices: [
      { text: 'Lùi lại', nextNodeId: 'step_back' }
    ],
    image: 'https://picsum.photos/seed/creepy-eye-keyhole/1200/800',
    imagePrompt: 'A macro shot of a brass keyhole. On the other side, a massive, bloodshot eye with a milky-white iris is pressed against the opening, staring directly into the viewer\'s soul.'
  },
  'step_back': {
    id: 'step_back',
    title: 'Lùi lại',
    text: 'Bạn cố gắng lùi lại thật nhanh nhưng bỗng nhiên vấp phải thứ gì đó khiến bạn ngã ra sàn.\n\nCố gắng giẫy dụa bò dậy nhưng có thứ gì đó không đúng, Những thứ dưới sàn dường như đang sống lại và chúng đang tóm lấy bạn\n\nBạn đang bị kéo vào dưới sàn bởi thứ đó.\n\nTrong sự tuyệt vọng, bạn nghe thấy tiếng chân ngoài cửa rời đi, bạn cố gắng kêu cứu nhưng không hề có sự đáp lại.\n\nTrong những giây phút cuối cùng trước khi chìm vào đống máu thịt trên sàn, dường như bạn nghe thấy âm thanh của đứa trẻ.',
    isEnding: true,
    endingType: 'bad',
    choices: [
      { text: 'GAME OVER', nextNodeId: 'downstairs_breakfast' }
    ],
    image: 'https://picsum.photos/seed/floor-monsters/1200/800',
    imagePrompt: 'A chaotic shot of the boy falling backward onto the floor. The "meat" on the ground is alive, pulsating and sprouting small, grasping hands of raw flesh that are dragging him down into the gore.'
  },
  'look_door_gap': {
    id: 'look_door_gap',
    title: 'Nhìn qua khe cửa',
    text: 'Bạn nằm xuống sàn, cả cơ thể đang ngập một nửa vào mớ sền sệt đó, cố sức im lặng và nghiêng đầu đưa mắt nhìn qua khe cửa.\n\nĐập vào mắt bạn là một đôi chân trần khô quắt lại như chủ nhân nó là một chiếc thây khô, những móng chân dài bẩn thỉu uốn cong và cắm xuống sàn như của một loài thú săn mồi.',
    choices: [
      { text: 'Cửa mở', nextNodeId: 'door_opens' }
    ],
    image: 'https://picsum.photos/seed/creepy-feet-door/1200/800',
    imagePrompt: 'A terrifying low-angle shot through the gap at the bottom of the door. A pair of shriveled, skeletal bare feet with long, yellowed, curved claws are standing just inches away. The skin is like parchment stretched over bone.'
  },
  'find_hiding_spot': {
    id: 'find_hiding_spot',
    title: 'Trốn !!!',
    text: 'Bạn cảm thấy không an toàn khi đứng ở cửa, trốn đi là lựa chọn duy nhất bây giờ.',
    choices: [
      { text: 'Trốn vào phòng tắm', nextNodeId: 'hide_bathroom' },
      { text: 'Trốn vào gầm giường', nextNodeId: 'hide_under_bed' },
      { text: 'Trốn trên giường', nextNodeId: 'hide_on_bed' }
    ],
    image: 'https://picsum.photos/seed/hiding-options/1200/800',
    imagePrompt: 'A wide, atmospheric shot of the dark bedroom, highlighting three potential hiding spots: the open, dark bathroom door; the deep, pitch-black space beneath the bed; and the top of the bed itself, covered in shadows.'
  },
  'hide_bathroom': {
    id: 'hide_bathroom',
    title: 'Trốn vào phòng tắm',
    text: 'Bạn chạy thật nhanh vào phòng tắm nhưng chợt nhớ ra vẫn còn thứ gì trong đó.\n\nCó lẽ, đây cũng không phải một lựa chọn an toàn. Bạn dừng gấp trước cửa phòng tắm và quay lại.',
    choices: [
      { text: 'Trốn vào gầm giường', nextNodeId: 'hide_under_bed' },
      { text: 'Trốn trên giường', nextNodeId: 'hide_on_bed' }
    ],
    image: 'https://picsum.photos/seed/hide-bathroom-fail/1200/800',
    imagePrompt: 'A tense shot of the boy skidding to a halt at the doorway of the bathroom. Thick, unnatural fog rolls out from the darkness inside, and a faint, wet sound can be heard from within.'
  },
  'hide_under_bed': {
    id: 'hide_under_bed',
    title: 'Trốn vào gầm giường',
    text: 'Bạn chạy tới bên giường, cúi xuống.\n\nThật kỳ lạ khi bạn không nghĩ ra kiểm tra dưới gầm giường đầu tiên, có lẽ có thứ gì dưới đó. Nhưng kỳ lạ hơn nữa là dưới gầm giường quá sạch sẽ, không hề có một thứ gì cả, không bị phủ đầy bởi thứ chất lỏng khắp phòng, không có cả một chút tro bụi.\n\nNhưng không còn thời gian để suy nghĩ nữa, tiếng bước chân đã dừng lại. Ai đó đang đứng trước cửa.',
    choices: [
      { text: 'Chui vào', nextNodeId: 'crawl_under_bed' }
    ],
    image: 'https://picsum.photos/seed/under-bed-clean/1200/800',
    imagePrompt: 'A surreal shot of the boy peeking under the bed. While the rest of the room is a nightmare of blood and decay, the space beneath the bed is impossibly clean, glowing with a soft, white light. It looks like a portal to another world.'
  },
  'hide_on_bed': {
    id: 'hide_on_bed',
    title: 'Trốn trên giường',
    text: 'Tiếng bước chân dừng lại trước cửa phòng. Ai đó đang đứng đó? Không biết!\n\nBạn hoảng sợ với chính suy nghĩ của mình, hồi hộp không biết điều gì sẽ xảy ra tiếp theo. Sẽ có tiếng mở cửa chăng? Hay tiếng gõ cửa? Hay tiếng gọi của bố mẹ? Hay tiếng bước chân đi xa? Quá nhiều thứ có thể xảy ra, và chính bạn cũng không biết bạn mong chờ âm thanh nào nữa.',
    choices: [
      { text: 'Chờ đợi', nextNodeId: 'wait_on_bed' }
    ],
    image: 'https://picsum.photos/seed/on-bed-waiting/1200/800',
    imagePrompt: 'A claustrophobic shot of the boy huddled under a thick, dusty blanket on the bed. His eyes are wide with terror as he stares at the bedroom door, which is slowly beginning to creak open.'
  },
  'crawl_under_bed': {
    id: 'crawl_under_bed',
    title: 'Chui vào',
    text: 'Bạn lách người vào gầm giường, lo sợ không biết chuyện gì sẽ xảy đến. Dưới lưng bạn hình như chạm vào thứ gì đó.\n\nNơi này thật kỳ lạ, mặc dù xung quanh đầy chất lỏng ngập tới mắt cá chân nhưng chúng không hề chảy vào đây tí nào. Cứ như có một tấm kính vô hình đang bao bọc nơi này vậy.\n\nNgoài cửa một mảnh im lặng khiến bạn có thể quan sát kỹ hơn. Không phải! Không phải chúng không chảy vào gầm giường, chúng có chảy vào nhưng tan biến ngay lập tức.',
    choices: [
      { text: 'Giống như bạn', nextNodeId: 'just_like_you' }
    ],
    image: 'https://picsum.photos/seed/under-bed-void/1200/800',
    imagePrompt: 'A surreal, wide shot from beneath the bed. The boy lies in a pristine, white void. Just beyond the edge of the bed, the floor of the room is a churning sea of dark-red blood and gore. The boundary is sharp and impossible.'
  },
  'just_like_you': {
    id: 'just_like_you',
    title: 'Giống như bạn',
    text: 'Khi bạn nhận ra thì đã quá muộn, không hề có sự đau đớn, không báo trước, bạn không cảm nhận được chút nào. Cơ thể bạn chỉ đơn giản là biến mất, từng phần từng phần một, tan biến trong không khí.',
    isEnding: true,
    endingType: 'bad',
    choices: [
      { text: 'GAME OVER', nextNodeId: 'downstairs_breakfast' }
    ],
    image: 'https://picsum.photos/seed/vanishing/1200/800',
    imagePrompt: 'A tragic, ethereal shot of the boy\'s body slowly dissolving into shimmering particles of white light and dark shadow. He is lying in the white void beneath the bed, his expression one of peaceful oblivion.'
  },
  'wait_on_bed': {
    id: 'wait_on_bed',
    title: 'Chờ đợi',
    text: 'Nằm trong lớp chăn đầy bụi bặm, mùi nấm mốc và mùi hôi thối vẫn quanh quẩn đâu đây. Hồi hộp và sợ hãi như bóp nghẹt lấy tim bạn, không dám phát ra một âm thanh nào, không dám cử động. Không biết trôi qua bao lâu, tưởng chừng như cả thế kỷ đã trôi qua, yên lặng cuối cùng đã bị đánh vỡ.',
    choices: [
      { text: 'Tiếng bước chân', nextNodeId: 'footsteps_leave' }
    ],
    image: 'https://picsum.photos/seed/waiting-under-blanket/1200/800',
    imagePrompt: 'A claustrophobic close-up of the boy\'s eyes peeking out from beneath a heavy, dusty blanket. The room is pitch black, and the only light comes from a faint, ghostly glow. He is paralyzed with fear, listening to the silence.'
  },
  'footsteps_leave': {
    id: 'footsteps_leave',
    title: 'Tiếng bước chân',
    text: 'Tiếng bước chân nặng nề rời khỏi.\n\nBạn đã không dám lên tiếng, quá sợ hãi khiến bạn không dám đánh cuộc xem đó có phải bố mẹ bạn hay không.\n\nNhưng dù gì thì, hiện tại bạn cũng đã an toàn.\n\nKéo tấm chăn xuống và thở phào một hơi, hít thở mớ không khí không trong lành gì nhưng đủ lạnh để bạn bình tĩnh lại. Bây giờ bạn sẽ làm gì.',
    choices: [
      { text: 'Xuống giường', nextNodeId: 'get_off_bed' },
      { text: 'Không xuống giường', nextNodeId: 'stay_on_bed' }
    ],
    image: 'https://picsum.photos/seed/footsteps-leaving/1200/800',
    imagePrompt: 'A wide shot of the dark bedroom door, now closed. The heavy footsteps have faded into the distance, leaving behind a thick, oppressive silence. The boy is a small, trembling shape on the bed.'
  },
  'get_off_bed': {
    id: 'get_off_bed',
    title: 'Xuống giường',
    text: 'Chờ đợi thêm một chút, khi đã cảm thấy an toàn, bạn rón rén bước xuống giường, cố gắng không gây nên một tiếng động nào.',
    choices: [
      { text: 'Tìm kiếm', nextNodeId: 'search' }
    ],
    image: 'https://picsum.photos/seed/stepping-down-safe/1200/800',
    imagePrompt: 'A visceral shot of the boy\'s pale feet carefully touching down into the thick, dark-red gore that covers the floor. The ripples in the liquid catch the faint light, looking like dark oil.'
  },
  'search': {
    id: 'search',
    title: 'Tìm kiếm',
    text: 'Đứng giữa phòng, bạn biết bây giờ xung quanh không còn an toàn nữa. Phải tìm được thứ gì đó giúp bạn thoát khỏi đây.',
    choices: [
      { text: 'Kiểm tra cửa sổ', nextNodeId: 'search_check_window' },
      { text: 'Kiểm tra cửa chính', nextNodeId: 'search_check_main_door' },
      { text: 'Kiểm tra phòng tắm', nextNodeId: 'search_recheck_bathroom' }
    ],
    image: 'https://picsum.photos/seed/searching-room/1200/800',
    imagePrompt: 'A wide shot of the boy cautiously searching through the wreckage of his bedroom. He is illuminated by a single, flickering light source. The room is a chaotic mess of broken furniture and dark stains.'
  },
  'search_check_window': {
    id: 'search_check_window',
    title: 'Kiểm tra cửa sổ',
    text: 'Cửa sổ vẫn đang đóng chặt, phía chân trời vẫn là một mảng sáng màu đỏ như trước, không có dấu hiệu gì là trời sẽ sáng lên.',
    choices: [
      { text: 'Tiếp tục', nextNodeId: 'search' }
    ],
    image: 'https://picsum.photos/seed/window-locked-red/1200/800',
    imagePrompt: 'A haunting shot of the boy staring out the locked window. The sky is a deep, bruised purple, with a persistent and growing crimson glow on the horizon that feels like a countdown.'
  },
  'search_check_main_door': {
    id: 'search_check_main_door',
    title: 'Kiểm tra cửa chính',
    text: 'Cửa chính vẫn khóa, bạn không còn đủ can đảm để lên tiếng lần nữa.',
    choices: [
      { text: 'Thử nhìn qua khe cửa', nextNodeId: 'search_look_door_gap' }
    ],
    image: 'https://picsum.photos/seed/main-door-locked/1200/800',
    imagePrompt: 'A shot of the boy standing before the massive, locked bedroom door. It looks like a tombstone in the darkness. The silence in the room is heavy and expectant.'
  },
  'search_recheck_bathroom': {
    id: 'search_recheck_bathroom',
    title: 'Kiểm tra phòng tắm',
    text: 'Bạn quay lại phòng tắm. Tấm gương vẫn ở đó, nhưng lần này bạn nhận ra có gì đó khác lạ đằng sau lớp kính mờ. Bạn thử chạm vào và một mảnh gương vỡ rơi ra.',
    choices: [
      { text: 'Lấy mảnh gương', nextNodeId: 'mirror_shard' },
      { text: 'Tiếp tục', nextNodeId: 'search' }
    ],
    image: 'https://picsum.photos/seed/bathroom-mirror-shard/1200/800',
    imagePrompt: 'A wide shot of the grimy, blood-stained bathroom. The air is thick with a heavy, metallic fog. The large mirror on the wall is cracked and covered in dark, dried fluid.'
  },
  'mirror_shard': {
    id: 'mirror_shard',
    title: 'Mảnh gương',
    text: 'Mảnh gương bạn vừa nhặt được phát ra ánh sáng màu đỏ. Không phải phát sáng. Mà là những hình ảnh phản chiếu bạn thấy được qua gương như là từ một thế giới khác. Thế giới với ánh nắng màu đỏ, bạn vẫn là bạn. Nhưng căn phòng lại trở về bình thường, sạch sẽ, mới tinh. Chỉ là, mọi vật nhiễm phải một thứ ánh sáng màu đỏ.',
    choices: [
      { text: 'Kiểm tra căn phòng', nextNodeId: 'check_room_with_mirror' }
    ],
    image: 'https://picsum.photos/seed/mirror-shard-red/1200/800',
    imagePrompt: 'A macro shot of a sharp mirror shard held in a trembling hand. The shard glows with an intense, pulsating crimson light. The reflection within the shard shows a perfectly clean, sunlit version of the room, but everything is tinted blood-red.'
  },
  'check_room_with_mirror': {
    id: 'check_room_with_mirror',
    title: 'Kiểm tra',
    text: 'Chắc chắn đây là chìa khóa cho việc thoát khỏi căn phòng. Bạn cầm tấm gương trên tay và kiểm tra mọi thứ xung quanh.',
    choices: [
      { text: 'Gầm giường', nextNodeId: 'mirror_check_under_bed' },
      { text: 'Giường', nextNodeId: 'mirror_check_bed' },
      { text: 'Cửa sổ', nextNodeId: 'mirror_check_window' },
      { text: 'Cửa chính', nextNodeId: 'mirror_check_main_door' },
      { text: 'Phòng tắm', nextNodeId: 'mirror_check_bathroom' }
    ],
    image: 'https://picsum.photos/seed/checking-room-mirror/1200/800',
    imagePrompt: 'A surreal shot of the boy holding the mirror shard up to his eye. Through the glass, he sees a pristine, orderly bedroom bathed in red light. Outside the shard\'s frame, the actual room is a nightmare of decay and gore. The contrast is jarring.'
  },
  'mirror_check_under_bed': {
    id: 'mirror_check_under_bed',
    title: 'Gầm giường',
    text: 'Gầm giường không có gì thay đổi, chỉ phủ thêm ánh sáng màu đỏ\n\nNhững thứ dưới sàn biến mất trong tấm gương. Nhưng nhờ ánh sáng phát ra từ hình ảnh phản chiếu. Bạn đã nhận ra được thứ dưới sàn là gì. Đó là máu và thịt nát. Một sự hoảng sợ và cơn buồn nôn đánh úp lấy bạn. Nhưng bây giờ không phải là lúc',
    choices: [
      { text: 'Tiếp tục kiểm tra', nextNodeId: 'check_room_with_mirror', style: 'link-purple' }
    ],
    image: 'https://picsum.photos/seed/mirror-under-bed/1200/800',
    imagePrompt: 'A visceral shot of the boy holding the shard over the floor. Within the shard\'s reflection, the dark gore is revealed to be a churning, bubbling mass of raw, wet meat and bone fragments. The boy\'s face is reflected in the shard, twisted in a silent scream of disgust.'
  },
  'mirror_check_bed': {
    id: 'mirror_check_bed',
    title: 'Giường',
    text: 'Chiếc giường trở nên mới hơn trong mảnh gương, bạn thử lật tung mọi thứ lên nhưng không tìm được thứ gì.',
    choices: [
      { text: 'Tiếp tục kiểm tra', nextNodeId: 'check_room_with_mirror', style: 'link-purple' }
    ],
    image: 'https://picsum.photos/seed/mirror-bed/1200/800',
    imagePrompt: 'A surreal shot of the boy holding the shard up to the bed. The reflection shows a perfectly made, sun-drenched bed with crisp white sheets. In reality, the bed is a rotting, blood-soaked mess of springs and moldy fabric.'
  },
  'mirror_check_window': {
    id: 'mirror_check_window',
    title: 'Cửa sổ',
    text: 'Khung cửa sổ không có gì thay đổi, nhưng khung cảnh phía dưới lại trở nên hoàn toàn khác. Những thứ kỳ dị biến mất, bầu trời hoàn toàn bao phủ bởi ánh sáng đỏ. Và xung quanh không còn trống không nữa, những căn nhà hàng xóm đã xuất hiện trở lại.\n\nChỉ là. Bạn đứng đó trong một khoảng thời gian. Nhưng không hề thấy sự xuất hiện của bất cứ một người nào cả.\n\nCửa sổ vẫn đóng chặt và bạn không còn dám phát ra âm thanh quá lớn một lần nữa.',
    choices: [
      { text: 'Tiếp tục kiểm tra', nextNodeId: 'check_room_with_mirror', style: 'link-purple' }
    ],
    image: 'https://picsum.photos/seed/mirror-window/1200/800',
    imagePrompt: 'A haunting shot of the boy holding the shard up to the window. The reflection shows a normal, peaceful suburban street, but everything is bathed in an intense, unnatural crimson light. The houses look like they are bleeding. No living thing is in sight.'
  },
  'mirror_check_main_door': {
    id: 'mirror_check_main_door',
    title: 'Cửa chính',
    text: 'Cửa chính không có gì kỳ lạ, nó vẫn khóa, và bạn không đủ dũng cảm để thử một lần nữa',
    choices: [
      { text: 'Tiếp tục kiểm tra', nextNodeId: 'check_room_with_mirror', style: 'link-purple' }
    ],
    image: 'https://picsum.photos/seed/mirror-main-door/1200/800',
    imagePrompt: 'A shot of the boy holding the shard up to the bedroom door. The reflection shows a brand-new, polished oak door. In reality, the door is a charred, blackened slab of wood that looks like it was burned from the inside.'
  },
  'mirror_check_bathroom': {
    id: 'mirror_check_bathroom',
    title: 'Phòng tắm',
    text: 'Cầm trên tay mảnh gương tiến vào phòng tắm. Ngay giây phút đầu tiên, kẻ trong gương đã xuất hiện.',
    choices: [
      { text: 'Hỏi', nextNodeId: 'mirror_bathroom_ask' },
      { text: 'Bỏ qua', nextNodeId: 'mirror_bathroom_skip' }
    ],
    image: 'https://picsum.photos/seed/mirror-bathroom/1200/800',
    imagePrompt: 'The boy stands in the dark bathroom, holding the glowing shard. In the large, cracked mirror on the wall, his reflection is no longer his own—it\'s a tall, shadowy figure with a wide, needle-toothed grin and glowing blue eyes.'
  },
  'mirror_bathroom_ask': {
    id: 'mirror_bathroom_ask',
    title: 'Hỏi',
    text: '"Đây là đâu"\n\n"Vừa nãy mình đã nói rồi mà. Đây là phòng của cậu". Tên trong gương nói với ánh mắt tập trung vào mảnh gương trên tay bạn và giọng nói không còn tự tin như trước.\n\n"Vậy đây là đâu?". Bạn nói và giơ mảnh gương về phía nó.',
    choices: [
      { text: 'Ừm... Thì', nextNodeId: 'mirror_bathroom_ask_then' }
    ],
    image: 'https://picsum.photos/seed/mirror-ask/1200/800',
    imagePrompt: 'A chilling close-up of the boy standing before the cracked bathroom mirror. His reflection is a horrific, distorted version of himself, with elongated features and glowing blue eyes. He is whispering a question into the silence.'
  },
  'mirror_bathroom_skip': {
    id: 'mirror_bathroom_skip',
    title: 'Bỏ qua',
    text: 'Bạn bỏ qua kẻ trong gương và dùng mảnh gương quan sát mọi thứ trong phong tắm. Chẳng có manh mối gì cả, chỉ có tấm gương vẫn phản chiếu lại hình ảnh căn phòng tối đen. Và kẻ trong gương đứng đó im lặng quan sát bạn trong suốt quá trình.\n\nBạn biết đây là lúc phải hỏi gì đó',
    choices: [
      { text: '"Thứ này là gì?"', nextNodeId: 'mirror_bathroom_ask_what' }
    ],
    image: 'https://picsum.photos/seed/mirror-skip/1200/800',
    imagePrompt: 'A tense shot of the boy turning his back on the mirror, his face pale and sweating. In the reflection behind him, his monstrous counterpart remains perfectly still, staring at the back of his head with predatory intent.'
  },
  'mirror_bathroom_ask_then': {
    id: 'mirror_bathroom_ask_then',
    title: 'Ừm... Thì...',
    text: '"Ừm. . .Thì. . . đó vẫn là phòng cậu"\n\n"Tại sao tôi ở đây"\n\n"Vì cậu muốn"\n\n"làm sao tôi thoát khỏi đây"\n\n"Khỏi đây? Khỏi đâu cơ"\n\n"Nơi này". Bạn chỉ tay xuống dưới sàn, nơi tràn ngập bóng tối và máu.\n\n"Ồ, nơi này à. Nơi này chỉ là giấc mơ thôi. Muốn thoát khỏi đây thì cậu cứ lên giường, ngủ một giấc, và cậu sẽ thoát khỏi ác mộng thôi".',
    choices: [
      { text: 'Tin tưởng', nextNodeId: 'mirror_bathroom_trust' },
      { text: 'Không tin', nextNodeId: 'mirror_bathroom_distrust' }
    ],
    image: 'https://picsum.photos/seed/mirror-dream/1200/800',
    imagePrompt: 'A wide shot of the bathroom. The boy is small and vulnerable, while his reflection in the mirror is massive and looming. The reflection is pointing a long, spindly finger toward the bedroom, where the bed is visible through the open door.'
  },
  'mirror_bathroom_trust': {
    id: 'mirror_bathroom_trust',
    title: 'Tin tưởng',
    text: 'Có vẻ như những gì kẻ trong gương nói là điều hợp lý, thế giới này quá kinh khủng, chắc chắn đây chỉ là ác mộng. Và mảnh giấy dưới cửa cũng đã nói rằng "nơi kết thúc cũng là nơi bắt đầu". Có lẽ, giấc ngủ sẽ giúp bạn thoát khỏi cơn ác mộng này.',
    choices: [
      { text: 'Tiếp tục', nextNodeId: 'return_to_bed_dream' }
    ],
    image: 'https://picsum.photos/seed/trust-sleep/1200/800',
    imagePrompt: 'A wide shot of the boy lying on the bed, his eyes shut tight. The shadows in the corners of the room are elongating and thickening, reaching out like dark fingers toward the bed. The air is heavy with a sense of finality.'
  },
  'mirror_bathroom_distrust': {
    id: 'mirror_bathroom_distrust',
    title: 'Không tin',
    text: '"Ngươi nói dối"\n\n"Đâu có, đó chính là những gì cậu nói, những gì cậu muốn mà"\n\n"Vậy thứ này là gì?". Bạn nói và giơ mảnh gương lên.\n\n"Điều này thì mình có quyền không nói"\n\nĐến lúc này bạn đã không chiếm được đáp án cho câu hỏi, và dù bây giờ kẻ trong gương có nói điều gì, bạn cũng sẽ không tin tưởng. Đến lúc phải thử làm gì đó.',
    choices: [
      { text: 'Thử đập vỡ tấm gương', nextNodeId: 'break_mirror_attempt' },
      { text: 'Thử áp mảnh gương lên tấm gương', nextNodeId: 'press_shard_attempt' },
      { text: 'Nghĩ cách khác', nextNodeId: 'think_other_way' }
    ],
    image: 'https://picsum.photos/seed/distrust-mirror/1200/800',
    imagePrompt: 'A tense close-up of the boy in the bathroom. He is staring at his monstrous reflection with a look of cold, hard defiance. He grips the glowing mirror shard so tightly his knuckles are white. The reflection\'s grin has widened, revealing rows of needle-like teeth.'
  },
  'return_to_bed_dream': {
    id: 'return_to_bed_dream',
    title: 'Tiếp tục',
    text: 'Bạn lầm lũi quay lại chiếc giường cũ kỹ. Cảm giác lạnh lẽo bao trùm lấy cơ thể khi bạn nằm xuống. Bạn nhắm mắt lại, hy vọng khi mở mắt ra, mọi thứ sẽ biến mất...',
    choices: [
      { text: 'Ngủ thiếp đi', nextNodeId: 'ending_dream_trap' }
    ],
    image: 'https://picsum.photos/seed/bed-sleep/1200/800',
    imagePrompt: 'A wide shot of the boy lying on the bed, his eyes shut tight. The shadows in the corners of the room are elongating and thickening, reaching out like dark fingers toward the bed. The air is heavy with a sense of finality.'
  },
  'break_mirror_attempt': {
    id: 'break_mirror_attempt',
    title: 'Thử đập vỡ tấm gương',
    text: 'Nhìn kẻ trong gương đang bày ra gương mặt lo lắng. Bạn nghĩ rằng, có lẽ chỉ có một cách có thể thoát ra khỏi đây.\n\nXOẢNG!!!\n\nTấm gương vỡ vụn, tiếng kẻ trong gương thét lên đầy đau đớn. Nhưng vỡ vụn không chỉ là tấm gương, mảnh gương trên tay bạn cũng nứt ra, and vỡ vụn thành từng mảnh... Và cả mọi thứ xung quanh, chiếc giường, bức tường, căn phòng, không khí, tất cả mọi thứ... Khi chính bạn cũng tan vỡ theo thế giới này, hình như bạn nghe được tiếng của đứa trẻ.',
    choices: [
      { text: 'GAME OVER', nextNodeId: 'restart_node' }
    ],
    image: 'https://picsum.photos/seed/shatter-world/1200/800',
    isEnding: true,
    endingType: 'bad',
    imagePrompt: 'The entire world shattering like glass. Shards of reality flying everywhere as the boy dissolves into the void.'
  },
  'press_shard_attempt': {
    id: 'press_shard_attempt',
    title: 'Thử áp mảnh gương lên tấm gương',
    text: 'Bạn tiến gần lại tấm gương, kẻ trong gương bắt đầu trở nên lo lắng, bạn tìm kiếm nhưng không thấy mảnh vỡ nào trên tấm gương cả, nó hoàn hảo như mới vậy.\n\nBạn quyết định áp mảnh gương lên xem sẽ có điều gì xảy ra.',
    choices: [
      { text: 'Tan vào', nextNodeId: 'melt_into_mirror' }
    ],
    image: 'https://picsum.photos/seed/press-shard-mirror/1200/800',
    imagePrompt: 'A surreal shot of the boy pressing the glowing shard against the surface of the large mirror. Where they touch, the glass ripples like water, and a blinding white light begins to bleed out from the point of contact.'
  },
  'think_other_way': {
    id: 'think_other_way',
    title: 'Nghĩ cách khác',
    text: 'Bạn cầm tấm gương trên tay, suy nghĩ xem mình nên làm gì. Kẻ trong gương vẫn cố lảm nhảm bên tai bạn.\n\n"Cậu chỉ cần đi ngủ thôi, ở đây mọi thứ quá đáng sợ đúng không? Chỉ cần quay lại giường và mọi chuyện sẽ kết thúc, bố mẹ đang chờ cậu tỉnh dậy đó. . ."\n\nBạn bỏ ngoài tai những lời nó nói, thử bình tĩnh lại. Bạn nhìn mảnh gương, nửa gương mặt của bạn hiện lên trên đó, và khung cảnh phía sau là một góc phòng tắm với ánh sáng.\n\nĐưa mắt nhìn về phía tấm gương, kẻ trong gương đang lải nhải nhằm khiến bạn trở lại giường, khung cảnh phía sau là phòng tắm cũ kỹ tối tăm.\n\nBạn đã có quyết định',
    choices: [
      { text: 'Quay lưng lại !!!', nextNodeId: 'turn_around_bathroom' }
    ],
    image: 'https://picsum.photos/seed/thinking-bathroom/1200/800',
    imagePrompt: 'A quiet, atmospheric shot of the boy sitting on the cold bathroom floor, the glowing shard illuminating his thoughtful face. He is surrounded by an encroaching darkness that seems to be waiting for his next move.'
  },
  'melt_into_mirror': {
    id: 'melt_into_mirror',
    title: 'Tan vào',
    text: 'Ngay khi chạm vào nhau, mảnh gương nhỏ trên tay bạn như tan vào nước, bạn đã không nhận ra kẻ trong gương đã làm những hành động giống như bạn, và tay nó chờ sẵn tại nơi mà bạn đặt mảnh gương lên.\n\nCầm mảnh gương và nhìn bạn cười quỷ quyệt, nó nói:\n\n"Ồ, ha ha, xem tớ nhặt được thứ gì này. Mình nghĩ bây giờ cậu nên đi ngủ đi"\n\nMột sức mạnh nào đó lôi kéo bạn về giường, và ý thức bạn dần dần chìm xuống.\n\n.\n\n.\n\n.',
    choices: [
      { text: 'Tỉnh Dậy!!!!', nextNodeId: 'ending_dream_trap' }
    ],
    image: 'https://picsum.photos/seed/melting-mirror/1200/800',
    imagePrompt: 'A surreal shot of the boy\'s body partially submerged in the surface of the large mirror. The glass ripples around him like liquid silver. His face is calm as he transitions between worlds.'
  },
  'turn_around_bathroom': {
    id: 'turn_around_bathroom',
    title: 'Quay lưng lại !!!',
    text: 'Bạn giơ tấm gương lên ngang tầm mắt, bỏ qua lời cảnh báo của mẩu giấy đầu tiên, quay lưng lại thật nhanh và nhìn vào mảnh gương trên tay.\n\nKẻ trong gương vẫn đứng ở đó, xung quanh nó vẫn là nhà tắm cũ kỹ, tối tăm. Một nửa gương mặt của bạn trong mảnh gương vẫn sáng lên ánh sáng màu đỏ.\n\nNhưng mọi thứ bên ngoài đã hoàn toàn thay đổi.\n\nCăn phòng đã trở lại như ban đầu, sàn nhà cũng không còn những thứ đó, và mọi thứ không còn tối tăm một chút nào. Chỉ là. Phủ lên mọi thứ là một thứ ánh sáng màu đỏ như những gì bạn đã thấy qua mảnh gương. Đây vẫn chưa phải là thế giới bình thường.',
    choices: [
      { text: 'Mảnh gương', nextNodeId: 'mirror_shard_view' }
    ],
    image: 'https://picsum.photos/seed/turn-around-red/1200/800',
    imagePrompt: 'A tense shot of the boy turning his back on the mirror. In the reflection, the shadowy, needle-toothed figure is leaning out of the glass, its long, spindly fingers inches away from the boy\'s neck. The boy\'s face is set in grim determination.'
  },
  'mirror_shard_view': {
    id: 'mirror_shard_view',
    title: 'Mảnh gương',
    text: 'Những gì trong mảnh gương bây giờ lại trở thành thế giới vừa rồi, đen tối, cũ kỹ, và kinh tởm. Ít nhất, bạn đã thoát khỏi nơi tệ nhất.\n\nKẻ trong gương lên tiếng sau một hồi im lặng.\n\n"Mình đã nói với cậu rồi, đây là ác mộng, và cậu sẽ phải hối hận thôi"\n\nNói xong, nó biến mất. Và qua tấm gương, bạn nhận ra rằng, bây giờ bạn đã trở thành một cậu bé 8 tuổi. Bạn bé lại ????\n\nBạn biết nên bắt đầu thử tìm kiếm xem có gì trong căn phòng này.',
    choices: [
      { text: 'Kiểm tra xung quanh', nextNodeId: 'check_around_red_world' },
      { text: 'Rời khỏi', nextNodeId: 'leave_room_red_world' }
    ],
    image: 'https://picsum.photos/seed/shard-reflection-8yo/1200/800',
    imagePrompt: 'A chilling shot of the boy looking into the mirror shard. The reflection shows him as a much younger child, perhaps eight years old, with wide, terrified eyes. The world within the shard is a nightmare of decay and shadows.'
  },
  'check_around_red_world': {
    id: 'check_around_red_world',
    title: 'Kiểm tra quanh phòng tắm',
    text: 'Bạn không tìm thấy gì trong này cả.',
    choices: [
      { text: 'Rời khỏi', nextNodeId: 'leave_room_red_world' }
    ],
    image: 'https://picsum.photos/seed/check-bathroom-red/1200/800',
    imagePrompt: 'A wide shot of the bathroom, now impossibly clean and orderly, but bathed in an intense, surreal crimson light that seems to emanate from the walls themselves. The boy looks around cautiously, his small frame dwarfed by the strange environment.'
  },
  'leave_room_red_world': {
    id: 'leave_room_red_world',
    title: 'Căn phòng.',
    text: 'Quay trở lại giữa phòng, bây giờ là lúc tìm kiếm thêm thứ gì đó.',
    choices: [
      { text: 'Chiếc giường', nextNodeId: 'check_bed_red_world' },
      { text: 'Tủ đầu giường', nextNodeId: 'check_nightstand_red_world' },
      { text: 'Cửa sổ', nextNodeId: 'check_window_red_world' },
      { text: 'Cửa chính', nextNodeId: 'try_door_red_world' }
    ],
    image: 'https://picsum.photos/seed/clean-room-light/1200/800',
    imagePrompt: 'A wide shot of the bedroom, now impossibly clean and orderly, but bathed in an intense, surreal crimson light that seems to emanate from the walls themselves. The boy looks around cautiously, his small frame dwarfed by the strange environment.'
  },
  'check_nightstand_red_world': {
    id: 'check_nightstand_red_world',
    title: 'Chiếc tủ',
    text: 'Chiếc tủ không khóa, lần này bạn tìm thấy một con gấu bông dính máu được nhét trong góc. Nó mang lại cho bạn cảm giác quen thuộc.',
    choices: [{ text: 'Tiếp tục', nextNodeId: 'leave_room_red_world' }],
    image: 'https://picsum.photos/seed/nightstand-locked/1200/800',
    imagePrompt: 'A macro shot of an open nightstand drawer. Inside, a small, weathered teddy bear is tucked into a corner. Its fur is matted with dark, dried blood, and one of its button eyes is missing. It looks both cherished and forgotten.'
  },
  'check_bed_red_world': {
    id: 'check_bed_red_world',
    title: 'Chiếc giường.',
    text: 'Bạn kiểm tra chiếc giường, sạch sẽ và gọn gàng. Đúng như những gì nó đáng ra phải như vậy. Và phía dưới gối, bạn tìm thấy một mẩu giấy và một chiếc kẹo mút nhiều màu được gói bằng lớp giấy trong suốt. . .',
    choices: [
      { text: 'Nằm xuống giường', nextNodeId: 'red_world_sleep' },
      { text: 'Kiểm tra cây kẹo', nextNodeId: 'red_world_candy' },
      { text: 'Đọc mẩu giấy', nextNodeId: 'red_world_paper' }
    ],
    image: 'https://picsum.photos/seed/bed-clean-red/1200/800',
    imagePrompt: 'A close-up of the clean, white pillow on the bed. Tucked beneath it is a small, folded note and a bright, multi-colored lollipop wrapped in clear plastic. The lollipop catches the red light, looking like a faceted jewel.'
  },
  'check_window_red_world': {
    id: 'check_window_red_world',
    title: 'Cửa sổ.',
    text: 'Bạn tiến về phía cửa sổ. Khung cảnh phía ngoài làm bạn thật bất ngờ. Mặt trời ở phía xa, màu đỏ của hoàng hôn phủ khắp mọi nơi. Những căn nhà xung quanh đã trở lại, cả khu phố đang hoạt động như một ngày bình thường, những người hàng xóm, những chiếc xe đang qua lại, những đứa trẻ nô đùa trên vỉa hè. Có lẽ, mọi thứ là thật.',
    choices: [
      { text: 'Kêu cứu', nextNodeId: 'red_world_call_help' },
      { text: 'Chờ. . .', nextNodeId: 'red_world_wait' }
    ],
    image: 'https://picsum.photos/seed/window-view-red/1200/800',
    imagePrompt: 'A haunting shot of the boy staring out the window. The suburban street outside is perfectly preserved but bathed in a violent, pulsating red light. The sky is a deep, bruised crimson, and there is a total absence of any living thing.'
  },
  'try_door_red_world': {
    id: 'try_door_red_world',
    title: 'Cửa chính',
    text: 'Bạn tiến về phía cửa. Lần này, cánh cửa không hề khóa. Nhưng ngay khi bạn vặn tay nắm. Tiếng bước chân xuất hiện ngoài hành lang.',
    choices: [
      { text: 'Mở cửa', nextNodeId: 'red_world_open_door' },
      { text: 'Nhìn qua khe cửa', nextNodeId: 'red_world_door_gap' },
      { text: 'Trốn', nextNodeId: 'red_world_hide' }
    ],
    image: 'https://picsum.photos/seed/door-unlocked-red/1200/800',
    imagePrompt: 'A wide shot of the boy standing before the bedroom door. The wood is polished and clean, but the intense red light makes it look like it\'s glowing. His hand is hovering over the brass handle, trembling slightly.'
  },
  'red_world_candy': {
    id: 'red_world_candy',
    title: 'Cây kẹo',
    text: 'Thứ này. . . Hình như trước đây nó là món yêu thích của bạn. Nhưng bây giờ. . .Không biết vì lý do gì. . .Bạn chỉ cảm thấy sự ghê tởm khi nhìn vào nó.',
    choices: [
      { text: 'Mẩu giấy', nextNodeId: 'red_world_paper' },
      { text: 'Nằm xuống giường', nextNodeId: 'red_world_sleep' }
    ],
    image: 'https://picsum.photos/seed/candy-red/1200/800',
    imagePrompt: 'A macro shot of the multi-colored lollipop lying on the white sheets. The red light refracting through the sugar makes it look like a mass of raw, glistening organs. The boy\'s hand is reaching for it, but hesitating.'
  },
  'red_world_paper': {
    id: 'red_world_paper',
    title: 'Mẩu giấy',
    text: 'Lần này vẫn là mẩu giấy màu đen nhưng trên đó lại là những dòng chữ màu trắng:\n\n"ĐỪNG LÀM ỒN"',
    choices: [
      { text: 'Nằm xuống giường', nextNodeId: 'red_world_sleep' }
    ],
    image: 'https://picsum.photos/seed/paper-red/1200/800',
    imagePrompt: 'A close-up of a small, weathered note. The paper is yellowed and brittle. Glowing, neon-red letters are etched into the surface, the message pulsing with a faint, rhythmic light.'
  },
  'red_world_sleep': {
    id: 'red_world_sleep',
    title: 'Nằm xuống giường',
    text: 'Bạn nằm xuống chiếc giường êm ái của mình, chiếc gối mềm mại thật thoải mái.\n\nCó lẽ kẻ trong gương nói đúng, tất cả là ác mộng. Và chỉ cần một giấc ngủ thôi là mọi thứ sẽ trở lại bình thường. Bạn cũng đã quá mệt mỏi với những gì đã trải qua. Tâm trí bạn chìm vào sự yên tĩnh và thoải mái, dần dần bạn đi vào giấc ngủ.',
    choices: [{ text: 'Tỉnh dậy!!!!', nextNodeId: 'red_world_wake_up_dark' }],
    image: 'https://picsum.photos/seed/sleep-red/1200/800',
    imagePrompt: 'A wide shot of the boy lying on the clean bed, his eyes shut. The intense red light in the room seems to soften, becoming a warm, comforting glow. The atmosphere is one of profound, yet unsettling, peace.'
  },
  'red_world_wake_up_dark': {
    id: 'red_world_wake_up_dark',
    title: 'Tỉnh dậy!!!!',
    text: 'Cơn đau đầu như búa bổ khiến bạn choàng tỉnh. Ký ức ùa về như một cơn lũ dữ. Bạn nhận ra mình vẫn đang ở trong căn phòng đó, nhưng bóng tối giờ đây đặc quánh và hôi hám hơn bao giờ hết. Mùi ẩm mốc, mùi rỉ sét, và một mùi gì đó ngọt lịm đến buồn nôn xộc vào mũi.\n\nBạn cuống cuồng mò mẫm trên chiếc giường phủ đầy bụi bặm, hy vọng tìm thấy mảnh gương – chiếc phao cứu sinh duy nhất. Bạn nhoài người xuống gầm giường, tay quờ quạng trong vô vọng. Trống rỗng. Mảnh gương đã biến mất.',
    choices: [{ text: 'Ồ!', nextNodeId: 'oh_node' }],
    image: 'https://picsum.photos/seed/dark-wakeup-panic/1200/800',
    imagePrompt: 'A chaotic shot of the boy bolting upright in the dark, decaying bed. His face is a mask of pure panic, illuminated by a faint, sickly green light. He is frantically tearing at the dusty sheets, searching for the missing mirror shard.'
  },
  'oh_node': {
    id: 'oh_node',
    title: 'Ồ!',
    text: 'Một giọng nói quen thuộc vang lên từ phía phòng tắm, phá tan sự im lặng chết chóc:\n\n"Ồ... Cậu đang tìm thứ này hả?"\n\nBạn run rẩy bước vào. Trong ánh sáng lờ mờ, bạn thấy *nó* đang đứng đó, tay nâng niu mảnh gương vỡ. Một nụ cười quái dị kéo dài đến tận mang tai, để lộ những hàm răng sắc nhọn.\n\n"Chào mừng cậu quay trở lại. Chúng ta sẽ không bao giờ phải xa nhau nữa..."\n\nBóng tối bắt đầu trườn lên từ sàn nhà, quấn chặt lấy chân bạn. Mọi thứ mờ dần, tan biến vào hư không. Trước khi ý thức hoàn toàn bị nuốt chửng, tiếng thì thầm của chính bạn thuở nhỏ vang lên bên tai.',
    choices: [{ text: 'GAME OVER', nextNodeId: 'restart_node' }],
    image: 'https://picsum.photos/seed/creepy-mirror-return-final/1200/800',
    imagePrompt: 'A terrifying wide shot of the bathroom. The monstrous reflection is leaning out of the cracked mirror, holding the glowing shard like a trophy. Dark, oily shadows are rapidly rising from the floor, coiling around the boy\'s legs like snakes.',
    isEnding: true,
    endingType: 'bad'
  },
  'red_world_call_help': {
    id: 'red_world_call_help',
    title: 'Kêu cứu',
    text: 'Bạn hô lên thật to, cố gắng vung vẩy tay mong những người phía dưới chú ý đến mình. Nhưng vô vọng, không một ai nhìn về phía này cả. Bạn quyết định phải đập vỡ cửa sổ. Có lẽ bạn có thể thoát khỏi đây bằng cách này. Có lẽ tiếng động lớn sẽ thu hút sự chú ý của mọi người.',
    choices: [{ text: 'Đập vỡ cửa sổ', nextNodeId: 'red_world_break_window' }],
    image: 'https://picsum.photos/seed/help-red/1200/800',
    imagePrompt: 'A desperate shot of the boy pressing his face against the window glass, his mouth open in a silent scream. He is waving his small hands frantically at the red-tinted street below, where people continue to move like oblivious ghosts.'
  },
  'red_world_wait': {
    id: 'red_world_wait',
    title: 'Chờ',
    text: 'Bạn đứng đó nhìn ngắm mọi thứ trong một khoảng thời gian, có gì đó không ổn. Mặt trời vẫn ở vị trí đó, những chiếc xe biến mất khỏi tầm mắt rồi xuất hiện lại phía bên kia đường. Mọi người đang lặp đi lặp lại mọi hành động. Mọi thứ chỉ là giấc mơ.',
    choices: [{ text: 'Bỏ qua', nextNodeId: 'red_world_ignore_window' }],
    image: 'https://picsum.photos/seed/wait-red/1200/800',
    imagePrompt: 'The boy staring out the window, realizing the world outside is a looping, artificial dreamscape.'
  },
  'red_world_break_window': {
    id: 'red_world_break_window',
    title: 'Đập vỡ cửa sổ',
    text: 'Bạn dùng hết sức lực hòng đập vỡ ô cửa. Nhưng chúng không sứt mẻ chút nào cả. Bây giờ bạn chỉ là một đứa trẻ 8 tuổi. Cửa sổ này quá rắn chắc đối với bạn và căn phòng chẳng có thứ gì có thể sử dụng được.\n\nTrong lúc đó, bạn nghe thấy rất nhiều tiếng chân chạy về phía phòng mình.',
    choices: [{ text: 'Cửa phòng', nextNodeId: 'red_world_room_door' }],
    image: 'https://picsum.photos/seed/break-window-fail/1200/800',
    imagePrompt: 'A desperate shot of the small boy pounding his tiny fists against the thick, unbreakable window glass. His reflection in the red-tinted glass shows a terrified child. The street outside remains oblivious.'
  },
  'red_world_room_door': {
    id: 'red_world_room_door',
    title: 'Cửa phòng',
    text: 'Cửa phòng bật mở. Bạn vui mừng phát khóc lên khi thấy đó là bố mẹ bạn. Dù cho họ có đang giận dữ, dù cho họ có nhìn trẻ hơn và ốm yếu hơn so với ký ức của bạn.',
    choices: [{ text: 'Bố mẹ!!!', nextNodeId: 'red_world_parents' }],
    image: 'https://picsum.photos/seed/room-door-open/1200/800',
    imagePrompt: 'A wide shot of the bedroom door bursting open. The boy is on his knees, tears of relief streaming down his face, as the silhouettes of his parents stand in the doorway. They are bathed in the intense red light, looking strangely thin and youthful.'
  },
  'red_world_parents': {
    id: 'red_world_parents',
    title: 'Bố mẹ!!!',
    text: '"Bố mẹ à. Cuối cùng bố mẹ cũng đến với con". Bạn khóc lóc nhào vào lòng bố mẹ, mọi thứ đã trải qua là quá nhiều với bạn. Bạn nghĩ rằng, cuối cùng mọi thứ cũng kết thúc.',
    choices: [{ text: 'Nhưng. . .', nextNodeId: 'red_world_but' }],
    image: 'https://picsum.photos/seed/parents-hug/1200/800',
    imagePrompt: 'A heart-wrenching shot of the small boy burying his face in his mother\'s skirt, his shoulders shaking with sobs. The parents stand stiff and unmoving, their shadows elongated and distorted by the red light.'
  },
  'red_world_but': {
    id: 'red_world_but',
    title: 'Nhưng. . .',
    text: 'Nhưng đáp lại bạn là sự im lặng, bạn ngẩng đầu lên, bây giờ bạn mới có thời gian quan sát bố mẹ mình. Hai gương mặt hốc hác với hốc mắt hõm sâu vào, hai gương mặt chỉ phù hợp với biểu cảm dại ra thẫn thờ giờ đây lại bị lấp đầy bởi sự giận dữ. Lạ lẫm. Nhưng không biết vì sao, bạn cảm thấy đây mới là những gì thực sự thuộc về bố mẹ bạn.',
    choices: [{ text: 'Chiếc tủ', nextNodeId: 'red_world_cabinet' }],
    image: 'https://picsum.photos/seed/parents-creepy/1200/800',
    imagePrompt: 'A chilling close-up of the parents\' faces. Their eyes are sunken pits of darkness, and their skin is stretched tight over their bones. Their expressions are fixed in a mask of cold, silent rage, illuminated by the harsh red light.'
  },
  'red_world_cabinet': {
    id: 'red_world_cabinet',
    title: 'Chiếc tủ',
    text: 'Bố nhấc bổng bạn lên, không hề có một sự thương tiếc nào cả. Bạn bắt đầu cảm thấy đau đớn và gào khóc.\n\nMẹ bạn tiến về chiếc tủ cạnh giường. Mở ngăn drawer duy nhất của nó ra.\n\nBạn bị hai người nhét vào trong tủ. Ngăn drawer quá bé. Cơ thể bạn bị đè ép thành hình thù kỳ quái. Đau đớn như xé rách cơ thể, bạn khóc lóc và van xin, đáp lại chỉ là sự im lặng chết chóc.\n\nTrước khi ngăn drawer khép lại, thứ cuối cùng bạn nhìn thấy là hai gương mặt vặn vẹo vì giận dữ.\n\nVà bạn nghe thấy tiếng của bản thân vang lên từ nơi nào đó.',
    choices: [{ text: 'GAME OVER', nextNodeId: 'restart_node' }],
    image: 'https://picsum.photos/seed/cabinet-ending/1200/800',
    imagePrompt: 'A small, dark cabinet drawer being forced shut. The boy\'s terrified face is visible inside before it closes.',
    isEnding: true,
    endingType: 'bad'
  },
  'red_world_ignore_window': {
    id: 'red_world_ignore_window',
    title: 'Bỏ qua',
    text: 'Bạn bỏ qua khung cảnh bên ngoài, xem xét kỹ ô cửa sổ nhằm tìm kiếm manh mối gì đó. Cuối cùng, bạn cũng tìm được mẩu giấy:\n\n"NHỮNG THỨ TỒI TỆ NHẤT SẼ TIẾN VÀO TỪ CỬA"',
    choices: [{ text: 'Tiếp tục', nextNodeId: 'leave_room_red_world' }],
    image: 'https://picsum.photos/seed/ignore-window-clue/1200/800',
    imagePrompt: 'A close-up of the boy\'s small hand picking up a weathered, yellowed note from the window sill. The text on the note is dark and jagged, as if scratched into the paper with a sharp object. The red light from outside casts a long, ominous shadow across the paper.'
  },
  'red_world_open_door': {
    id: 'red_world_open_door',
    title: 'Mở cửa',
    text: 'Có ai đó đang đến. Có lẽ là bố mẹ. Có lẽ người đó sẽ giúp bạn thoát khỏi giấc mơ này.\n\nBạn vui mừng mở cửa xông ra phía ngoài. Đứng cuối hành lang, là một người đàn ông béo với bộ đồ tây, một gương mặt đầy dầu mỡ đang cười rộ lên để lộ những chiếc răng vàng khiến bạn buồn nôn. Phải mất một lúc bạn mới nhận ra đó là người chú của mình. Đã rất lâu bạn chưa gặp ông ta.\n\nNhưng mà.\n\nTại sao bạn lại cảm thấy ghê tởm và sợ hãi.',
    choices: [{ text: 'Tiến đến', nextNodeId: 'red_world_approach_uncle' }],
    image: 'https://picsum.photos/seed/open-door-uncle/1200/800',
    imagePrompt: 'A chilling wide shot of a long, red-tinted hallway. At the far end, a large, obese man in a greasy suit stands with a wide, unpleasant smile. His face is shiny with sweat, and his yellow teeth are bared in a grotesque grin. The boy stands in the doorway, frozen in fear.'
  },
  'red_world_approach_uncle': {
    id: 'red_world_approach_uncle',
    title: 'Tiến đến',
    text: '"Ồ, cháu ra ngoài này chờ ta à"\n\nNgười đàn ông tiến đến, đặt tay lên vai, lôi bạn vào phòng, khóa cửa và kéo bạn ngồi xuống giường. Cả quá trình đó bạn không hề có chút phản ứng nào, bạn quá sợ hãi với những gì sắp xảy ra.',
    choices: [{ text: 'Cây kẹo', nextNodeId: 'red_world_uncle_candy' }],
    image: 'https://picsum.photos/seed/approach-uncle-creepy/1200/800',
    imagePrompt: 'A medium shot of the large man placing a heavy, meaty hand on the boy\'s small shoulder. The boy is visibly trembling, his face pale and eyes wide with terror. The man\'s shadow looms over him, large and predatory, as he leads him back into the red-lit room.'
  },
  'red_world_uncle_candy': {
    id: 'red_world_uncle_candy',
    title: 'Kẹo',
    text: 'Hắn ta đưa bạn một chiếc kẹo mút, và kéo bạn về gần phía hắn.\n\n"Cháu thích thứ này nhất đúng không. Ta mua cho cháu rồi này. Ta còn giấu nhiều kẹo hơn nữa đó. Cháu có muốn lấy chúng không. Chúng ta lại chơi trò hôm qua nhé. Và nhớ là đừng nói với ai về bí mật của hai chúng ta".\n\nBạn nhìn thấy gương mặt với nụ cười ghê tởm của gã tiến sát lại trước khi mọi thứ trở nên tối đen và ý thức của bạn tan biến.',
    choices: [{ text: 'GAME OVER', nextNodeId: 'restart_node' }],
    image: 'https://picsum.photos/seed/uncle-candy-ending/1200/800',
    imagePrompt: 'The man\'s face looming close to the boy, offering a colorful lollipop. The scene fades to black.',
    isEnding: true,
    endingType: 'bad'
  },
  'red_world_door_gap': {
    id: 'red_world_door_gap',
    title: 'Nhìn qua khe cửa',
    text: 'Bạn không biết được thứ gì sắp tiến tới, nhưng lần này khung cảnh xung quanh mang lại cho bạn cảm giác an toàn. Có lẽ, bạn nên quan sát một chút.',
    choices: [{ text: 'Nằm xuống', nextNodeId: 'red_world_lie_down' }],
    image: 'https://picsum.photos/seed/door-gap-safe/1200/800',
    imagePrompt: 'The boy peering through the gap at the bottom of the bedroom door, looking out into the hallway.'
  },
  'red_world_lie_down': {
    id: 'red_world_lie_down',
    title: 'Nằm xuống',
    text: 'Bạn nằm xuống sàn, nhìn qua khe cửa và hồi hộp chờ đợi. Tiếng bước chân ngày một gần. Và nó ngừng lại trước khi tiến vào tầm nhìn của bạn.\n\nAi đó đã dừng lại khi cách phòng bạn vài bước chân.\n\nBỗng nhiên, một gương mặt béo phì với những chiếc răng vàng khè xuất hiện trước mắt bạn. Gã ta nằm xuống, cũng nhìn qua khe cửa, mặt đối mặt.\n\n"Ồ, xem ta tìm được ai này".',
    choices: [{ text: 'Tiến vào', nextNodeId: 'red_world_uncle_enter' }],
    image: 'https://picsum.photos/seed/lie-down-observe-feet/1200/800',
    imagePrompt: 'A close-up of the floor at the door gap. On the other side, a pair of eyes and a creepy smile with yellow teeth are looking back.'
  },
  'red_world_uncle_enter': {
    id: 'red_world_uncle_enter',
    title: 'Tiến vào',
    text: 'Bạn nhận ra đó là người chú của mình. Đã rất lâu rồi bạn chưa gặp ông ta. Nhưng vì sao, khi nhìn vào gương mặt đó, bạn chỉ cảm thấy sự ghê tởm và sợ hãi.\n\nCánh cửa bị kéo ra. Gã ta tiến vào, bế bạn về phía giường. Bạn không hề có một chút phản ứng nào, tâm trí bạn tràn ngập sự sợ hãi mà bạn không biết bắt nguồn từ đâu.',
    choices: [{ text: 'Cây kẹo', nextNodeId: 'red_world_uncle_candy' }],
    image: 'https://picsum.photos/seed/uncle-enter-room/1200/800',
    imagePrompt: 'The bedroom door opening wide, and the large man stepping into the room with a predatory smile.'
  },
  'red_world_hide': {
    id: 'red_world_hide',
    title: 'Trốn !!!',
    text: 'Bạn cảm thấy có chuyện gì đó không ổn đang tiến đến, trốn đi và chờ đợi có lẽ sẽ giúp bạn an toàn.',
    choices: [
      { text: 'Trốn về giường', nextNodeId: 'red_world_hide_bed' },
      { text: 'Trốn vào gầm giường', nextNodeId: 'red_world_hide_under_bed' },
      { text: 'Trốn vào phòng tắm', nextNodeId: 'red_world_hide_bathroom' }
    ],
    image: 'https://picsum.photos/seed/hide-red-panic/1200/800',
    imagePrompt: 'The boy looking around the room frantically, trying to decide where to hide as footsteps approach.'
  },
  'red_world_hide_bed': {
    id: 'red_world_hide_bed',
    title: 'Trốn về giường',
    text: 'Bạn trốn về giường, trùm lên lớp chăn và quay lưng về phía cửa. Một sự sợ hãi kỳ lạ khiến cho bạn không đủ can đảm để đối diện thứ sắp tiến vào.\n\nTiếng bước chân dừng lại trước cửa phòng, tiếng mở cửa, tiếng khóa... \n\nVà một bàn tay ai đó đặt lên vai bạn.',
    choices: [{ text: 'Suỵttttttt', nextNodeId: 'red_world_shush' }],
    image: 'https://picsum.photos/seed/hide-bed-fear/1200/800',
    imagePrompt: 'The boy huddled under the blankets on his bed, his back to the door, trembling with fear.'
  },
  'red_world_shush': {
    id: 'red_world_shush',
    title: 'Suỵt~~~',
    text: 'Cảm giác hoảng sợ dâng lên trong bạn. Từ phía sau, vang lên tiếng nói của một người đàn ông mà bạn chưa thể nhận ra ngay được.\n\n"Suỵt"~~~ Đừng lên tiếng, là chú đây, đừng sợ, chúng ta cùng chơi một trò chơi này nhé". Sự sợ hãi chiếm lấy tâm trí bạn và mọi thứ bắt đầu mờ dần. Trước khi ý thức của bạn biến mất. Bạn nghe thấy tiếng nói của chính mình.',
    choices: [{ text: 'GAME OVER', nextNodeId: 'restart_node' }],
    image: 'https://picsum.photos/seed/shush-whisper/1200/800',
    imagePrompt: 'A large hand covering the boy\'s mouth from behind. The scene is dark and terrifying.',
    isEnding: true,
    endingType: 'bad'
  },
  'red_world_hide_under_bed': {
    id: 'red_world_hide_under_bed',
    title: 'Trốn vào gầm giường',
    text: 'Bạn nhanh chóng rời khỏi cửa và chui vào gầm giường, dưới này tối tăm một cách kỳ lạ. Tiếng bước chân mỗi ngày một gần. Bạn hồi hộp nhìn về phía cửa. Ở vị trí này, bạn vẫn có thể loáng thoáng nhìn qua khe cửa nếu có ai đến.\n\nNhưng bỗng nhiên. Bạn cảm thấy một bàn tay vòng qua và che lấy miệng mình.',
    choices: [{ text: 'Suỵttttttt', nextNodeId: 'red_world_shush' }],
    image: 'https://picsum.photos/seed/hide-under-bed-view/1200/800',
    imagePrompt: 'The boy lying flat under the bed, looking out at the door. A large hand is reaching from the shadows behind him to cover his mouth.'
  },
  'red_world_hide_bathroom': {
    id: 'red_world_hide_bathroom',
    title: 'Trốn vào phòng tắm',
    text: 'Một sự sợ hãi kỳ lạ khiến cho bạn không đủ can đảm để đối diện thứ sắp tiến vào. Bạn trốn vào phòng tắm, khép cửa lại\n\nTiếng bước chân dừng lại trước cửa phòng, tiếng mở cửa.\n\n...\n\nBạn hoảng sợ chờ đợi trong bóng tối, chỉ cầu mong thứ trước cửa rời đi. Nó đã đứng đó được một lúc. Và cuộn mình vào khoảng trống bên cạnh bồn cầu và bức tường, bạn dường như nhớ lại một vài thứ',
    choices: [{ text: 'Hồi tưởng', nextNodeId: 'red_world_bathroom_flashback' }],
    image: 'https://picsum.photos/seed/hide-bathroom-fear/1200/800',
    imagePrompt: 'The boy huddled in a corner of the bathroom, his knees to his chest, looking terrified as he listens to footsteps in the bedroom.'
  },
  'red_world_bathroom_flashback': {
    id: 'red_world_bathroom_flashback',
    title: 'Hồi tưởng',
    text: 'Đây là góc an toàn của mình. Bạn đã nhớ lại. Không biết bao nhiêu lần bạn đã trốn ở đây và khóc. Nhưng trốn khỏi thứ gì? Trốn khỏi ai? Bạn chưa thể nhớ ra. Nhưng bạn nhớ, có một thứ có thể khiến bạn cảm thấy an tâm.',
    choices: [{ text: 'Rời đi', nextNodeId: 'red_world_bathroom_leave' }],
    image: 'https://picsum.photos/seed/bathroom-safe-corner/1200/800',
    imagePrompt: 'A small, cramped corner of a bathroom. The boy is sitting there, looking lost in thought as memories resurface.'
  },
  'red_world_bathroom_leave': {
    id: 'red_world_bathroom_leave',
    title: 'Rời đi',
    text: 'Có tiếng đóng cửa lại, tiếng chân rời xa khỏi phòng bạn, ai đó đứng trước cửa đã rời đi, bạn ngồi lại một lúc chờ cho nội tâm bình tĩnh lại và sự sợ hãi lắng xuống.\n\nĐứng dậy và tìm trong chỗ chứa nước của bồn cầu, bạn thấy một quả bóng chày ướt nhẹp. Mặc dù bên trong khô cạn không còn chút nước nào nhưng quả bóng chày vẫn ướt một cách kỳ lạ.',
    choices: [{ text: 'Tiếp tục', nextNodeId: 'leave_room_red_world' }],
    image: 'https://picsum.photos/seed/bathroom-leave-baseball/1200/800',
    imagePrompt: 'The boy standing by the toilet, holding a wet baseball he found in the tank. The bathroom is clean but red-tinted.'
  },
  'mirror_bathroom_ask_what': {
    id: 'mirror_bathroom_ask_what',
    title: '"Thứ này là gì?"',
    text: '"Thứ này là gì?"\n\nBạn giơ mảnh gương về phía nó, trên tấm gương bây giờ là hình ảnh tối đen của căn phòng, kẻ trong gương làm theo hành động y như bạn, và trong tay nó là hình ảnh phản chiếu một góc phòng tắm chìm trong ánh sáng đỏ.\n\n"Ừm. . .Thì. . . điều này mình được quyền không trả lời cậu. Nhưng nếu cậu muốn thoát khỏi cơn ác mộng thì mình có cách đó"',
    choices: [
      { text: '"Cách nào cơ"', nextNodeId: 'mirror_bathroom_how' }
    ],
    image: 'https://picsum.photos/seed/mirror-what/1200/800',
    imagePrompt: 'A macro shot of the glowing mirror shard. Within its depths, instead of a reflection, there is a complex, shifting clockwork mechanism made of light and shadow, humming with an otherworldly energy.'
  },
  'mirror_bathroom_how': {
    id: 'mirror_bathroom_how',
    title: 'Cách nào cơ',
    text: '"Cách nào cơ"\n\n"Cậu chỉ cần cầm thứ này quay lại giường và cố gắng ngủ thôi. Chỉ cần lên giường đi ngủ, cậu sẽ thoát khỏi ác mộng"',
    choices: [
      { text: 'Tin tưởng', nextNodeId: 'mirror_bathroom_trust' },
      { text: 'Không tin', nextNodeId: 'mirror_bathroom_distrust' }
    ],
    image: 'https://picsum.photos/seed/mirror-how/1200/800',
    imagePrompt: 'A wide shot of the boy looking into the mirror shard. The reflection shows a beautiful, sun-drenched meadow, a stark and impossible contrast to the grimy, blood-stained bathroom.'
  },
  'stay_on_bed': {
    id: 'stay_on_bed',
    title: 'Không xuống giường',
    text: '"ỤwỤ Xin lỗi nhé, mọi thứ hơi quá với bạn phải không. Mình không cố ý làm bạn căng thẳng hay dọa bạn đâu.\n\nChúc mừng bạn đã tới được bước này \\(•◡•)/.\n\nCuộc thám hiểm đã qua được một chặng đường rất dài. Bạn rất giỏi mới tới được đây, nếu cảm thấy mệt mỏi quá hay sợ hãi, hồi hộp quá, bạn có thể nghỉ ngơi một chút. Nếu bạn cần thì mình sẵn lòng gửi tới bạn một cái ôm (ღ˘⌣˘ღ).\n\nDù thế nào thì mình cũng rất tự hào vì bạn đó. Cố lên, con đường phía trước sẽ không khiến bạn thất vọng đâu !!!"',
    choices: [
      { text: 'Tiếp tục nào', nextNodeId: 'get_off_bed' }
    ],
    image: 'https://picsum.photos/seed/staying-put/1200/800',
    imagePrompt: 'The boy sitting on his bed, looking hesitant but determined. The room is dark and mysterious.'
  },
  'recheck_bathroom': {
    id: 'recheck_bathroom',
    title: 'Kiểm tra phòng tắm',
    text: 'Tấm gương lần này không có gì bất thường, bạn đã có được mảnh giấy, cố gắng lục lọi nhưng bạn vẫn không thu hoạch thêm được gì',
    choices: [
      { text: 'Tiếp tục', nextNodeId: 'leave_bathroom' }
    ],
    image: 'https://picsum.photos/seed/bathroom-empty/1200/800',
    imagePrompt: 'The bathroom mirror reflecting an empty, dark room. The atmosphere is cold and desolate.'
  },
  'run_away': {
    id: 'run_away',
    title: 'Chạy!!!!',
    text: 'Bạn hoảng sợ quay đầu và chạy thật nhanh ra khỏi phòng tắm, nhắm thẳng về phía cửa phòng. Nhưng những thứ dưới đất như kéo lấy chân bạn lại.\n\nCuối cùng, bạn cũng chạy đến cửa phòng, cố sức vặn tay nắm cửa trong vô vọng. Cánh cửa đang khóa, tất nhiên rồi. Bạn quay người lại, dựa lưng vào cửa, hoảng sợ khi nhìn thấy bản thân đang cười qua hình ảnh phản chiếu từ cửa sổ.',
    choices: [
      { text: 'Cái bóng', nextNodeId: 'the_shadow' }
    ],
    image: 'https://picsum.photos/seed/running-scared/1200/800',
    imagePrompt: 'The boy running frantically towards the bedroom door, his face filled with terror. The floor is covered in a dark, viscous liquid.'
  },
  'the_shadow': {
    id: 'the_shadow',
    title: 'Cái bóng',
    text: 'Nụ cười càng ngày càng kéo rộng ra và gương mặt nó bắt đầu nứt ra. Bạn cảm thấy đau như chính gương mặt bạn đang bị xé rách.\n\nVà lần này, âm thanh phát ra từ miệng của chính bạn, với một giọng nói mỉa mai và đểu cáng nhất bạn từng thốt lên: "YOU LOSE".\n\nTrước khi bóng tối ập đến, bạn nghe thấy được giọng nói.',
    choices: [
      { text: 'GAME OVER', nextNodeId: 'restart_node' }
    ],
    image: 'https://picsum.photos/seed/shadow-face-crack/1200/800',
    imagePrompt: 'A terrifying close-up of a face cracking open, revealing a dark void within. The expression is one of malicious glee.'
  },
  'try_to_communicate': {
    id: 'try_to_communicate',
    title: 'Đứng lại và thử giao tiếp',
    text: 'Bạn giật mình trong 1 giây, và vượt qua nỗi sợ của bản thân mình. Trí tò mò thôi thúc bạn thử giao tiếp với bản thể trong gương kia. Có thể nó biết chút gì về tất cả những thứ kỳ lạ này.',
    choices: [
      { text: 'Xi. . . Xin. . . Xin chào', nextNodeId: 'hello_shadow' }
    ],
    image: 'https://picsum.photos/seed/brave-communication/1200/800',
    imagePrompt: 'The boy standing bravely in front of the bathroom mirror, attempting to speak to his reflection.'
  },
  'hello_shadow': {
    id: 'hello_shadow',
    title: 'Xi. . . Xin. . . Xin chào',
    text: '"Ồ, sao lại phải sợ hãi nhỉ tôi ơi, tôi là cậu kia mà, chúng ta làm bạn với nhau được một thời gian rồi còn gì nữa. Trông cậu y hệt như lần đầu tiên chúng ta gặp nhau ấy nhỉ"\n\nNó nói và cười lên. Một nụ cười thân thiện.\n\n"Ha ha, tôi vẫn nhớ lần đó cậu tệ hơn bây giờ nhiều. Đôi chân run rẩy, đôi mắt hoảng loạn. Và mặc dù bất cứ ai cũng thường tiểu ra sàn phòng tắm nhưng làm điều đó khi đang mặc quần áo thì nó cực kỳ tệ đúng không"\n\nNó vẫn tiếp tục cười với những lời đùa cợt và câu chuyện bạn không biết có phải là thật hay không.\n\nBây giờ là lúc bạn phải hỏi gì đó.',
    choices: [
      { text: 'Đây là đâu?', nextNodeId: 'where_am_i' }
    ],
    image: 'https://picsum.photos/seed/shadow-talking/1200/800',
    imagePrompt: 'The reflection in the mirror smiling warmly, but with an unsettling intensity. The bathroom is shrouded in shadows.'
  },
  'where_am_i': {
    id: 'where_am_i',
    title: 'Đây là đâu?',
    text: '"Ồ, đây là phòng của cậu mà. À, phải nói là phòng của chúng ta chứ. Tôi vẫn chưa quen thuộc cách xưng hô này lắm. Tại sao cậu lại hỏi một câu kỳ lạ thế này nhỉ. Có chuyện gì xảy ra với cậu à".\n\nNó hỏi với một biểu cảm đầy lo lắng.',
    choices: [
      { text: 'Tiếp tục hỏi', nextNodeId: 'continue_asking' },
      { text: 'Giả vờ theo những lời nó nói', nextNodeId: 'pretend_to_agree' },
      { text: 'Ngươi là ai', nextNodeId: 'who_are_you' }
    ],
    image: 'https://picsum.photos/seed/where-am-i/1200/800',
    imagePrompt: 'The boy looking confused and wary as he talks to his reflection. The reflection appears concerned.'
  },
  'continue_asking': {
    id: 'continue_asking',
    title: 'Tiếp tục hỏi',
    text: 'Tại sao phòng tôi lại thành ra thế này?\n\n"Thế này?\n\nThế nào cơ, mọi thứ vẫn như ngày hôm qua mà. Thứ mình thấy lạ duy nhất là cậu đó"',
    choices: [
      { text: 'Tiếp tục hỏi', nextNodeId: 'continue_asking_2' },
      { text: 'Thử đánh lừa', nextNodeId: 'try_to_deceive' }
    ],
    image: 'https://picsum.photos/seed/asking-more/1200/800',
    imagePrompt: 'The boy leaning closer to the mirror, his expression intense as he questions the reflection.'
  },
  'pretend_to_agree': {
    id: 'pretend_to_agree',
    title: 'Nói dối lừa nó',
    text: 'Bạn cố gắng trấn định lại, thử lừa nó:\n\n"Ừm. . . mình không biết nữa. Mình cảm thấy có gì là lạ xảy ra trong lúc mình ngủ. Mình nghĩ có lẽ cậu biết, và mình có hơi giật mình vì cách xuất hiện của cậu. . .Ừm. . . Cậu biết đấy. Trong này tối quá mà, mình không biết cậu có ở đây hay chưa"\n\n"Ôi dào, ở đây thì ngoài cậu ra đâu còn thứ gì kỳ lạ. Và khi cậu ở trên giường thì không có thứ gì làm hại cậu được hết, đúng như cậu muốn. Còn bây giờ mình rời đi đây. Trời còn chưa sáng mà, quay lại giường ngủ đi"\n\nDần dần biểu cảm trong gương trở nên giống với nụ cười gượng gạo của bạn. Khi cả hai trùng khớp, bạn biết nó đã rời khỏi.',
    choices: [
      { text: 'Kiểm tra xung quanh', nextNodeId: 'check_around' }
    ],
    image: 'https://picsum.photos/seed/pretending/1200/800',
    imagePrompt: 'The boy pretending to agree with his reflection, his face a mask of forced calm. The reflection looks satisfied.'
  },
  'who_are_you': {
    id: 'who_are_you',
    title: 'Ngươi là ai',
    text: '"Ôi dào, ngày nào cậu cũng bắt đầu bằng câu hỏi này. Cậu không thấy mệt sao. Tôi thì mệt đó. Tôi là ai được cơ chứ. Tôi là cậu, tôi chính là cậu, chúng ta chính là chúng ta. Tại sao càng ngày cậu càng mê mang với những câu hỏi kiểu này nhỉ. Mặc dù nhìn như chúng ta tách rời nhau đó. Nhưng cũng như những bản thân vật thể và hình ảnh của chúng trong gương. Tôi chính là cậu, những gì được phản chiếu ra từ cậu, qua tấm gương. Hơn thế nữa, tôi là bạn thân nhất của cậu. Tại sao lại hỏi câu hỏi này vào mỗi ngày nhỉ"',
    choices: [
      { text: 'Tin tưởng nó', nextNodeId: 'trust_it' },
      { text: 'Không tin', nextNodeId: 'dont_trust' }
    ],
    image: 'https://picsum.photos/seed/who-are-you/1200/800',
    imagePrompt: 'The reflection leaning out of the mirror slightly, its face identical to the boy\'s but with a different, more knowing expression.'
  },
  'continue_asking_2': {
    id: 'continue_asking_2',
    title: 'Không phải.',
    text: '"Không phải, ngày hôm qua tôi nhớ là mọi thứ vẫn bình thường, tôi dùng bữa với gia đình và sau đó lên phòng ngủ. Căn phòng này, nó vẫn sạch sẽ, mọi thứ đều mới. Và không có thứ chất nhầy dưới sàn này"\n\n"Ồ, gia đình à, thú vị"\n\nNó bắt đầu bỏ đi nụ cười thân thiện giả tạo và thay bằng một nụ cười quỷ quyệt của kẻ biến thái.\n\n"Mình nghĩ là có chuyện gì đó thú vị xảy ra với cậu rồi, mình nghĩ là cậu nên tìm hiểu kỹ hơn phòng của chính mình đi. Chúng ta sắp hết giờ nói chuyện rồi. Và mình phải đi ngay bây giờ. Và nếu có việc gì cần mình, Cậu biết tìm mình ở đâu rồi đó"\n\nNói xong câu nói, nụ cười của nó dần dần chuyển sang vẻ mặt hoảng loạn của chính bạn, và khi cả hai trùng khớp với nhau, bạn nghĩ rằng nó đã rời đi.\n\nBạn thử lên tiếng gọi nó nhưng không hề có sự trả lời.',
    choices: [
      { text: 'Rời khỏi phòng tắm', nextNodeId: 'leave_bathroom' }
    ],
    image: 'https://picsum.photos/seed/asking-more-2/1200/800',
    imagePrompt: 'The reflection showing a sinister, twisted smile. The boy looks horrified as he realizes something is very wrong.'
  },
  'try_to_deceive': {
    id: 'try_to_deceive',
    title: 'Nói dối lừa nó',
    text: 'Bạn cố gắng trấn định lại, thử lừa nó:\n\n"Ừm. . . mình không biết nữa. Mình cảm thấy có gì là lạ xảy ra trong lúc mình ngủ. Mình nghĩ có lẽ cậu biết, và mình có hơi giật mình vì cách xuất hiện của cậu. . .Ừm. . . Cậu biết đấy. Trong này tối quá mà, mình không biết cậu có ở đây hay chưa"\n\n"Ôi dào, ở đây thì ngoài cậu ra đâu còn thứ gì kỳ lạ. Và khi cậu ở trên giường thì không có thứ gì làm hại cậu được hết, đúng như cậu muốn. Còn bây giờ mình rời đi đây. Trời còn chưa sáng mà, quay lại giường ngủ đi"\n\nDần dần biểu cảm trong gương trở nên giống với nụ cười gượng gạo của bạn. Khi cả hai trùng khớp, bạn biết nó đã rời khỏi.',
    choices: [
      { text: 'Kiểm tra xung quanh', nextNodeId: 'leave_bathroom' }
    ],
    image: 'https://picsum.photos/seed/deceiving/1200/800',
    imagePrompt: 'The boy cautiously backing away from the mirror, his eyes fixed on his reflection which is now mimicking his movements perfectly.'
  },
  'check_around': {
    id: 'check_around',
    title: 'Kiểm tra xung quanh',
    text: 'Tránh nhìn vào gương, bạn lục lọi trong phòng tắm. Hình như những thứ dưới sàn ở đây nhiều hơn bên ngoài.\n\nCuối cùng bạn cũng tìm được một mẩu giấy được vo tròn lại mắc kẹt dưới bồn rửa mặt. Vẫn là một mẩu giấy màu đen được xe ra từ cuốn sổ với những dòng chữ phát quang.',
    choices: [
      { text: 'Đọc', nextNodeId: 'read_note_2' }
    ],
    image: 'https://picsum.photos/seed/checking-around/1200/800',
    imagePrompt: 'The boy searching the dark bathroom, his hands covered in the strange black liquid. He finds a crumpled note.'
  },
  'read_note_2': {
    id: 'read_note_2',
    title: 'Mẩu giấy thứ hai',
    text: 'HÃY TRÁNH XA ÁNH SÁNG',
    choices: [
      { text: 'Rời phòng tắm', nextNodeId: 'search' }
    ],
    image: 'https://picsum.photos/seed/note-2/1200/800',
    imagePrompt: 'A close-up of a black note with glowing green text that reads "HÃY TRÁNH XA ÁNH SÁNG" (STAY AWAY FROM THE LIGHT).'
  },
  'trust_it': {
    id: 'trust_it',
    title: 'Tin tưởng',
    text: '"Ừm, được rồi, mình luôn cảm thấy câu hỏi này thú vị nên mới hỏi thôi. Trông bản thân mình tức giận và làm nhảm cũng buồn cười lắm"\n\n"Hừm. nếu không có việc gì thì mình đi đây. Trời còn chưa sáng nữa"\n\nNói xong, hình ảnh trong gương mờ dần và trở lại thành hình phản chiếu của chính bạn.',
    choices: [
      { text: 'Kiểm tra xung quanh', nextNodeId: 'check_around' }
    ],
    image: 'https://picsum.photos/seed/trusting/1200/800',
    imagePrompt: 'The boy nodding slowly at the mirror, trying to believe what it says. The reflection fades back to a normal image.'
  },
  'dont_trust': {
    id: 'dont_trust',
    title: 'Không tin',
    text: '"Ừm. . . Nói sao nhỉ. Mình cũng không rõ những điều đó có phải là thật không nữa"\n\n"Những điều đó là chính cậu ra nói với mình mà"\n\nNói xong, kẻ trong gương bỗng dưng biến thành một cậu bé 8 tuổi, và bạn nhận ra đó chính là bạn trong quá khứ, đang hướng về phía tấm gương và nói:\n\n"Ồ, chào cậu, cậu chính là tớ phải không? Đúng rồi, cậu chính là mình, chúng ta thành bạn tốt của nhau nhé". Cậu bé nói xong và nở một nụ cười thuần khiết nhất.\n\n"Đó, cậu thấy chưa, đấy chính là những gì cậu nói nhé. Tớ chẳng bao giờ lừa cậu cả, tớ chỉ làm theo những gì cậu muốn thôi."',
    choices: [
      { text: 'Ừm. . . Thì. . .', nextNodeId: 'um_thi' }
    ],
    image: 'https://picsum.photos/seed/distrust/1200/800',
    imagePrompt: 'The mirror showing a reflection of the boy as an 8-year-old child, smiling innocently. The current boy looks on in disbelief.'
  },
  'um_thi': {
    id: 'um_thi',
    title: '"Ừm. . .Thì. . ."',
    text: '"Mình. . . Mình xin lỗi, bây giờ có lẽ mình sẽ quay lại ngủ nên cậu cũng ngủ đi"\n\nBạn vẫn chưa tin tưởng hoàn toàn vào nó, có lẽ tất cả hình ảnh đó là nó tự tạo ra, bạn không có một chút ký ức nào cả. Nhưng trẻ con thì ai biết được, bao giờ chúng chẳng nói chuyện với những người bạn tưởng tượng hay người bạn trong gương. . .\n\n"Ừm. Được rồi, mình đi đây, nhưng hãy nhớ là hôm nay cậu đã hỏi câu này rồi đó. Nếu lát nữa cậu hỏi tiếp thì mình sẽ cáu đó nha"\n\nHình ảnh trong gương dần dần trở thành hình ảnh của chính bạn. Khi mọi thứ trùng khớp, bạn biết nó đã rời đi.',
    choices: [
      { text: 'Kiểm tra xung quanh', nextNodeId: 'check_around' }
    ],
    image: 'https://picsum.photos/seed/um-thi/1200/800',
    imagePrompt: 'The boy looking down at his hands, feeling a deep sense of confusion and unease. The mirror reflection is now normal again.'
  },
  'leave_bathroom_trap': {
    id: 'leave_bathroom_trap',
    title: 'Quay lưng lại',
    text: 'Bạn quay lưng lại với tấm gương và định bắt đầu tìm kiếm xem còn gì hữu dụng không.\n\nNhưng khi bạn vừa quay lưng lại, bạn nghe được một tiếng cười từ phía sau.\n\n"Tóm được rồi"\n\nMột đôi tay vòng qua vai và ôm choàng lấy bạn, kéo bạn về phía tấm gương.',
    choices: [
      { text: 'Cố gắng dãy dụa', nextNodeId: 'struggle' }
    ],
    image: 'https://picsum.photos/seed/leave-bathroom/1200/800',
    imagePrompt: 'A dark, shadowy hand reaching out from the mirror and grabbing the boy\'s shoulder as he tries to leave.'
  },
  'struggle': {
    id: 'struggle',
    title: 'Cố gắng dãy dụa',
    text: 'Bạn cố gắng giãy giụa nhưng không thể phản kháng lại trước sức mạnh của kẻ trong gương.\n\nCơ thể bạn dần dần hòa tan vào tấm gương, từng chút từng chút một. Có lẽ khi bạn tan hết vào trong gương. Sẽ chỉ còn lại một "bạn" mà thôi.\n\nTrong một cố gắng cuối cùng, bạn cố hết sức đập vỡ tấm gương',
    choices: [
      { text: 'Vỡ vụn!!!', nextNodeId: 'shatter' }
    ],
    image: 'https://picsum.photos/seed/struggling/1200/800',
    imagePrompt: 'The boy struggling against the mirror\'s pull, his body partially merging with the glass surface. He is about to strike the mirror.'
  },
  'shatter': {
    id: 'shatter',
    title: 'Vỡ vụn',
    text: 'XOẢNG!!!\n\nTấm gương vỡ tan ra từng mảnh, kèm theo đó là tiếng thét lên của kẻ trong gương.\n\nTấm gương không chỉ là thứ duy nhất vỡ vụn. Hình ảnh của kẻ trong gương, hình ảnh của chính bạn, một nửa cơ thể đã chìm vào gương của bạn. Vỡ nát. trở thành một đống thịt, xương vụn và máu. Văng tung tóe khắp sàn.\n\nNằm trên những thứ đó trong những hơi thở cuối cùng.\n\nÍt nhất bạn đã biết thứ dưới sàn là gì.',
    choices: [
      { text: 'Giọng nói', nextNodeId: 'voice' }
    ],
    image: 'https://picsum.photos/seed/shatter/1200/800',
    imagePrompt: 'A shattered mirror on the floor, surrounded by dark liquid. The reflection is broken into many pieces.'
  },
  'voice': {
    id: 'voice',
    title: 'Giọng nói',
    text: 'Trước khi toàn bộ ý thức chìm vào bóng tối, bạn dường như nghe được giọng nói của một đứa trẻ.',
    choices: [
      { text: 'GAME OVER', nextNodeId: 'restart_node' }
    ],
    image: 'https://picsum.photos/seed/voice/1200/800',
    imagePrompt: 'A dark, abstract scene representing the fading consciousness of the boy. A mysterious voice echoes in the darkness.'
  },
  'restart_node': {
    id: 'restart_node',
    title: 'Làm lại nhé',
    text: 'Ồ, chúng ta lại gặp nhau. Cả tôi và bạn đều biết câu chuyện không chỉ đơn giản như thế phải không. Đôi khi mọi thứ không phải như những gì nhìn thấy. Bạn có muốn thử lại một lần nữa không?',
    choices: [
      { text: 'Thử lại nhé', nextNodeId: 'start' }
    ],
    image: 'https://picsum.photos/seed/dream-restart/1200/800',
    imagePrompt: 'A swirling vortex of dreams and memories, suggesting a new beginning or a return to the start.'
  },
  'search_look_door_gap': {
    id: 'search_look_door_gap',
    title: 'Thử nhìn qua khe cửa',
    text: 'Không biết kẻ phía ngoài hành lang có manh mối gì không, bạn bỏ qua cảm giác ghê rợn khi nằm xuống đống chất lỏng dưới sàn, nhìn qua khe cửa.\n\nPhía ngoài hành lang là một mảnh tối đen, nhưng đôi mắt đã quen với bóng tối của bạn nhận ra có thứ gì đó được giấu ở rìa của cánh cửa, nằm lệch về phía ngoài hành lang để tránh bị nuốt trọn bởi thứ dưới sàn căn phòng.',
    choices: [
      { text: 'Mẩu giấy', nextNodeId: 'search_door_note' }
    ],
    image: 'https://picsum.photos/seed/door-gap/1200/800',
    imagePrompt: 'The boy lying on the floor, peering through the gap under the bedroom door into a dark hallway.'
  },
  'search_door_note': {
    id: 'search_door_note',
    title: 'Mẩu giấy',
    text: 'Vẫn là một mẩu giấy đen xé ra từ cuốn sổ và chữ viết màu xanh lục của màu dạ quang:\n\n"Nơi bắt đầu cũng là nơi kết thúc"',
    choices: [
      { text: 'Tiếp tục', nextNodeId: 'search_return_from_door' }
    ],
    image: 'https://picsum.photos/seed/door-note/1200/800',
    imagePrompt: 'A close-up of a black note with glowing green text that reads "Nơi bắt đầu cũng là nơi kết thúc" (The beginning is also the end).'
  },
  'search_return_from_door': {
    id: 'search_return_from_door',
    title: 'Tiếp tục',
    text: 'Bạn bò lên từ đống chất lỏng, nhưng hình như có gì vừa lóe lên trong khóe mắt của bạn.\n\nPhía gầm giường.',
    choices: [
      { text: 'Kiểm tra', nextNodeId: 'search_under_bed' }
    ],
    image: 'https://picsum.photos/seed/return-from-door/1200/800',
    imagePrompt: 'The boy standing up from the floor, his attention caught by something under the bed.'
  },
  'search_under_bed': {
    id: 'search_under_bed',
    title: 'Gầm giường',
    text: 'Gầm giường sạch sẽ một cách kỳ lạ, không có một chút chất lỏng nào chảy vào đó. Không có một chút bụi nào. Nhưng phía sát tường là một thứ gì đó, và có một vệt sáng màu đỏ mờ mờ tỏa ra quanh rìa nơi nó tiếp xúc với sàn nhà.',
    choices: [
      { text: 'Tìm được!!!', nextNodeId: 'search_found_something' }
    ],
    image: 'https://picsum.photos/seed/under-bed/1200/800',
    imagePrompt: 'The boy reaching under the bed, where a faint red glow emanates from a hidden object.'
  },
  'search_found_something': {
    id: 'search_found_something',
    title: 'Mảnh gương',
    text: 'Mảnh gương bạn vừa nhặt được phát ra ánh sáng màu đỏ. Không phải phát sáng. Mà là những hình ảnh phản chiếu bạn thấy được qua gương như là từ một thế giới khác. Thế giới với ánh nắng màu đỏ, bạn vẫn là bạn. Nhưng căn phòng lại trở về bình thường, sạch sẽ, mới tinh. Chỉ là, mọi vật nhiễm phải một thứ ánh sáng màu đỏ.',
    choices: [
      { text: 'Kiểm tra căn phòng', nextNodeId: 'check_room_with_mirror' }
    ],
    image: 'https://picsum.photos/seed/mirror-shard-red/1200/800',
    imagePrompt: 'A close-up of the mirror shard in the boy\'s hand, reflecting a bright, red-tinted version of the room.'
  },
  'ending_dream_trap': {
    id: 'ending_dream_trap',
    title: 'Tỉnh dậy!!!!',
    text: 'Tiếng chuông báo thức vang lên, bạn bật dậy với lưng áo ướt đẫm mồ hôi.\n\n"Vừa rồi là mơ chăng?"\n\nBạn tự nhủ trong lòng.\n\nCũng như những giấc mơ khác, bạn dần quên đi những gì vừa xảy ra. Từng phần, từng phần một, mọi thứ trở nên mờ nhạt và tan biến dần ra khỏi trí nhớ của bạn.\n\nÁnh nắng chiếu qua cửa sổ, tiếng bố mẹ nói chuyện dưới phòng khách, mùi thơm của bánh crepe bay lên phòng. Mọi thứ sạch sẽ và thơm tho như nó hẳn phải như vậy. . .',
    choices: [
      { text: 'Bước xuống giường', nextNodeId: 'ending_dream_voice' }
    ],
    image: 'https://picsum.photos/seed/wakeup-sunny/1200/800',
    imagePrompt: 'The boy waking up in a bright, sunny room. He looks relieved but slightly confused. The atmosphere is warm and peaceful.'
  },
  'ending_dream_voice': {
    id: 'ending_dream_voice',
    title: '...',
    text: '.\n.\n.\n.\n.\n.\n\nMột giọng trẻ con vang lên trong căn phòng khi bạn xuống dùng bữa với bố mẹ.',
    choices: [
      { text: 'Làm lại', nextNodeId: 'restart_node' }
    ],
    image: 'https://picsum.photos/seed/crepe-breakfast/1200/800',
    imagePrompt: 'A delicious breakfast of crepes on a sunny table. The scene is idyllic, but there is an underlying sense of unease from the mysterious voice.'
  }
};
