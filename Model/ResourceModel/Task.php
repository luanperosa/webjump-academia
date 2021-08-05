<?php

namespace Webjump\Academia\Model\ResourceModel;

class Task extends \Magento\Framework\Model\ResourceModel\Db\AbstractDb
{
    protected function _construct()
    {
        $this->_init('webjump_todo_task', 'task_id');
    }
}
